Let's say you have a repository with two branches: master and feature. You have been working on the feature branch and have made several commits on it.

```sql
On master branch:
Commit 1: Add initial files
Commit 2: Implement feature A
Commit 3: Refactor feature A

On feature branch:
Commit 1: Implement feature B
Commit 2: Fix bug in feature B
Commit 3: Implement feature C
```

the master branch has three commits, while the feature branch has three commits of its own, which are independent of the commits in master. By using git rebase to integrate changes from the feature branch into the master branch, we can create a new branch with a linear history that includes all six commits.

- Switch to the master branch.

```sql
git checkout master
```

- Fetch the latest changes from the remote repository.

```sql
git fetch origin
```

- Pull the latest changes from the master branch.

```sql
git pull origin master
```

- Switch to the feature branch.

```sql
git checkout feature
```

- Rebase the feature branch onto the master branch.

```sql
git rebase master
```

`Explanation`: This command applies the changes made in the feature branch on top of the changes made in the master branch. This will make the feature branch up-to-date with the latest changes in the master branch.

- Once you have resolved all conflicts, continue the rebase process by running the following command:

```sql
git rebase --continue
```

- After the rebase process is complete, switch back to the master branch.

```sql
git checkout master
```

- Merge the changes from the feature branch into the master branch.

```sql
git merge feature
```

Explanation: This command merges the changes from the feature branch into the master branch. Now, all the changes made in the feature branch are integrated into the master branch.

- Push the changes to the remote repository.

```sql
git push origin master
```

Explanation: This command pushes the changes made in the master branch to the remote repository, making them available for other users to access.
