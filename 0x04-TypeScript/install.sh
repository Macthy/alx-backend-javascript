#!/bin/bash

# List of task directories
task_dirs=("task_0" "task_1" "task_2" "task_3" "task_4" "task_5")

# Loop through each task directory and run npm install
for dir in "${task_dirs[@]}"
do
  echo "Installing dependencies in $dir..."
  cd "$dir" && npm install
  cd ..
done

echo "All dependencies installed."

