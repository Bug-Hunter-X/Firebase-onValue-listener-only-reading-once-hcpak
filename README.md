# Firebase onValue Listener - Single Read Issue

This repository demonstrates a common misunderstanding with Firebase's `onValue` listener. The initial implementation incorrectly assumes `onValue` performs a single read, leading to unexpected behavior. The corrected version shows how to use `onValue` for continuous data updates.

## Problem
The original code uses `onValue` as if it's a single read operation.  This results in the data being logged only once, even if changes occur in the database.

## Solution
The solution shows the correct usage of `onValue`. It attaches a persistent listener to the database path, logging all changes as they occur.