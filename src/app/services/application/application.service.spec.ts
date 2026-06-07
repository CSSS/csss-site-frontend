import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { vi } from 'vitest';
import { TAB_SESSION_STORAGE_KEY } from './tab-session-state';
import { ApplicationService } from './application.service';

describe('ApplicationService', () => {
  let service: ApplicationService;
  let routerEvents: Subject<NavigationEnd>;
  let navigateSpy: ReturnType<typeof vi.fn>;

  const getStoredApplicationIds = (): number[] => {
    const raw = localStorage.getItem(TAB_SESSION_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    return JSON.parse(raw).applicationIds as number[];
  };

  const navigateTo = (url: string): void => {
    routerEvents.next(new NavigationEnd(1, url, url));
  };

  beforeEach(() => {
    localStorage.clear();
    routerEvents = new Subject<NavigationEnd>();
    navigateSpy = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { events: routerEvents.asObservable(), navigate: navigateSpy } },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });

    service = TestBed.inject(ApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should restore valid application IDs from local storage', () => {
    localStorage.setItem(
      TAB_SESSION_STORAGE_KEY,
      JSON.stringify({ version: 1, applicationIds: [0, 1, 999] })
    );

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { events: routerEvents.asObservable(), navigate: navigateSpy } },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    service = TestBed.inject(ApplicationService);

    expect([...service.runningApplications().keys()]).toEqual([0, 1]);
  });

  it('should persist when a new application is opened', () => {
    navigateTo('/readme');

    expect(getStoredApplicationIds()).toEqual([0]);
  });

  it('should not persist when switching focus between open applications', () => {
    navigateTo('/readme');
    navigateTo('/officers');
    const persistedAfterBothOpen = localStorage.getItem(TAB_SESSION_STORAGE_KEY);

    navigateTo('/readme');

    expect(localStorage.getItem(TAB_SESSION_STORAGE_KEY)).toBe(persistedAfterBothOpen);
    expect([...service.runningApplications().keys()]).toEqual([0, 1]);
  });

  it('should persist when an application is closed', () => {
    navigateTo('/readme');
    navigateTo('/officers');

    service.closeApplication(0);

    expect(getStoredApplicationIds()).toEqual([1]);
  });

  it('should persist an empty tab session when the last application is closed', () => {
    navigateTo('/readme');

    service.closeApplication(0);

    expect(getStoredApplicationIds()).toEqual([]);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
