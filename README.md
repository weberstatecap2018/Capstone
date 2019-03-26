# Weber State Capstone Project

Using Mongo, Express, Angular, and Node. Our team is creating a full stack application to allow WSU students to ask questions on the forum and look for jobs on the jobs forum.

## Getting Started

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

How to setup your own local branch for making changes

This creates a new branch off of master branch

```
git branch branchName
```

To move into your new branch

```
git checkout branchName
```

Set up the upstream for your branch You will have to run this for your first push from your branch

```
git push --set-upstream origin Conners-branch
```

Now your ready to make changes and start adding your changes.
When done, you are ready to commit your branch. It may have you setup your upstream which is shown above.

```
git add .
git commit -m"msg here"
git push
```

If you would rather stay in the master branch. You must do the following. IN ORDER!

```
git add filepathHere
git commit -m"your msg here."
git pull
git push
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