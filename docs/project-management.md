# Project Management

## Overview

This documentation contains our workflow: which is ```git flow```, how to fork, how do we name our commits, how do we do a proper pull request, and other things.

## Forking and Branching Guidelines

### Forking the project

1. Go back to the top level of this [repo](https://github.com/gdgphilippines/website-2021).
2. Click the "Fork" button in the upper right hand corner of the interface. [Learn more about forks](http://help.github.com/fork-a-repo).
3. After the repository  has been forked, you will be taken to your copy of the repo.

### Create a local clone of your fork
1. In your own forked repo, on the right hand side, click on the **Code** button.
2. Copy the HTTPS link of your repository. It should look like this: ```https://github.com/{your-username}/website-2021.git```
2. Open a **Terminal / Command Line / Bash Shell** in your projects directory.
3. Type the following command: ```git clone [the-link-that-you-copied]```. For example: ```git clone https://github.com/Ik4wP4rin4ngBbq/website-2021.git```. This will then download the entire repo to your local machine

### Setting up the Upstream

1. Navigate to your newly cloned directory.
```
cd website-2021
```
2. Add a remote to the official website-2021 repo:
```
git remote add upstream https://github.com/gdgphilippines/website-2021.git
```
3. (Optional) To get the latest changes from upstream:
```
git checkout dev
git pull upstream dev
```

### Picking the Task / Issue that you want to fix

Now that you have a local copy on your machine, it is time to contribue.

1. Go to the [issues section](https://github.com/gdgphilippines/website-2021/issues) of the repo.
2. Find an issue that you think you can do and click on it.
3. Once you went there, take note of the title and issue number. Assign it to yourself and use the comments section to ask questions if you need more information.
4. On your Terminal / Command Line / Bash Shell (make sure you are in your project folder), create a branch from dev branch:
```
git checkout devp        # to make sure that you in dev branch
git pull upstream dev   # to pull any updates from the main dev branch
git push origin dev     # to update your own forked repo from updates from main dev branch
git checkout -b [slugified-issue-title]-#[issue-number] # this is to create a new branch with reference to your issue that you picked
git push -u origin [slugified-issue-title]-#[issue-number]
```
 The last two commands, for example, given the picture, should be written like this:
```
git checkout -b add-sentry-release-deployment-code-for-tracking-#15
git push -u origin add-sentry-release-deployment-code-for-tracking-#15
```
Or if you want it short:
```
git checkout -b add-sentry-#15
git push -u origin add-sentry-#15
```

### (Optional / Advanced) Rebase
You can use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits making them public.

## Doing A Pull Request

Doing a pull request means you want to merge your code branch back to the main dev branch.

To do this, you go back to the [main repository](https://github.com/gdgphilippines/devfest2018). And click on Pull Request.

Make sure your base branch is `[the main repository]/dev` and the branch that you want to merge is your feature branch that you have been working on.

Please do not delete the template as well, as it will automatically close the pull request and will have to ask you to do it again.

Here's an example of a basic Pull Request

```
### Description
This adds a new page in the system

### Related Issue
Fixes #45

### Motivation and Context
It solves the lack of this page in the system that is needed by the users

### How Has This Been Tested?
- The page loads when it goes to this url.
- The page component exists

### Screenshots (if appropriate):

### Types of changes
- [ ] Bug fix (non-breaking change which fixes an issue)
- [x] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)

### Checklist:
<!--- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!--- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->
- [x] My code follows the code style of this project. (delete if it is documentation)
- [x] I have updated the documentation accordingly.
- [x] I have read the **CONTRIBUTING** document.
- [x] I have added tests to cover my changes.
- [x] All new and existing tests passed.

### Reviewer Checklist:
<!--- This is for the reviewer -->
- [ ] Code follows the code style of the project (frontend/backend)
- [ ] Documentation updated
- [ ] DRY Code
- [ ] Added tests to cover changes
- [ ] All tests have passed
- [ ] Reviews have been done and approved
```

Note: Please don't do anything in the Reviewer's checklist, as it is for the reviewer

## Assign a Reviewer

The github repo is tasked to ask a reviewer before merging. You can always ask an admin to do it or somebody else. If the admin is full of tasks as of the moment, you can ask somebody to do the reviewer. We empower anybody who can follow the [Review](Review.md) instructions on how to check for code.

## What's Next?

Once you are done, you can go for another task that you think you can finish. If the reviewer needs you to do some changes, you need to do those changes before your pull request can be approved. If you think you have resolved a conversation, click resolved and tag the reviewer so that he/she can be notified.