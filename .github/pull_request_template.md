closes #

Description:
Describe what the bug was or what the feature is.
e.g. On the README page, the typed in message "Computing Science Student Society" was wrapping on letters rather than words.

# FOR BUGS
Root cause:
Explain the root cause of the issue.
e.g. Since the animation used GSAP's split by chars feature, each individual letter was its own inline-block, which means word wrapping wouldn't work since they were all separate divs.

Fix:
Describe your solution.
e.g. Added reverted the letters back to a single div using `split.revert()` once the animation has completed.

# FOR FEATURES
Features:
* Create a list of features that were added
* These features should explain workflows for end user, how to access the feature, and any requirements the end user should know
* If you developed a new module/framework for developers, mention it here too

(optional) Future issues:
If you foresee your change causing an issue in the future then mention it here.
If it's something we'll need to address then we can open another issue to address this one.
