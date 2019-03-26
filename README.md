# Weber State Capstone Project

Using Mongo, Express, Angular, and Node. Our team is creating a full stack application to allow WSU students to ask questions on the forum and look for jobs on the jobs forum.

## Getting Started

Please read [git team flow](https://jameschambers.co/writing/git-team-workflow-cheatsheet/) for a visual aid on how branching off of master works.

Navigate to a directory where you want your project to be located. Clone the repo and run git clone "repo link here" in your command line. This will create the folder and all packages being used on this project.

### Installing

Run the following command in the Capstone root directory to install all packages being used

```
npm install
```

Navigate to /Frontend/Capstone and run the following command to get all packages.

```
npm install
```

## Checking the commit history in the command line

Run this command if you want to see what other people have committed.
```
git log
```

## How to commit with Git on the command line

### Make sure your master is up to date before branching off to your own local branch

Todo this, run the following command in the master branch (Being in the root directory of our capstone folder)

```
git pull
```

Now you are ready to branch off and start adding changes for the app.

How to setup your own local branch for making changes

This creates a new branch off of master branch (This is only temporary. You will delete after your fix/change is working)

```
git branch branchName
```

To move into your new branch

```
git checkout branchName
```

Now you can start making changes and committing (dont push till you are all done)

When done, you are ready to commit your branch. It may have you setup your upstream which is shown above.

```
git add .
git commit -m"msg here"
git push --set-upstream origin branchName
```

Once done here. You will have to go into Github. Find your branch. And request a merge pull request to merge your changes into master.

## Now you can delete your local branch

Deleting the remote branch from git

```
git push origin :branchName
```

Deleting local branch (can't be in the branch you are deleting. Make sure you are back in master branch).

```
git branch -d branchName
```

## Deployment

In Frontend/Capstone run this command for the frontend

```
ng serve --open
```

In the root directory run this command for the backend

```
npm start
```
