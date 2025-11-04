# Assignment 4

Reverse engineering, XSS attacks, And Sql Injections
CS 4612-01: Secure Software Development, Fall 2025
Due: November 6th

## Purpose

The assignment's learning objective is for students to gain first-hand experience on
Reverse engineering, XSS attacks and SQL injection attacks by running codes and
application to demo and show what they have learned about vulnerabilities from class
into action.

## Activities:

1- You are given a program with uncalled functions, you will need to point your
next instruction register to the function’s address to run it. Use instructions
from reverse engineering. See file eipExercise.c, run the functions
cannotReach and untouchableFunction even though it wasn’t called from
the main function.

2- Play the google demo for XSS scripting game and trials. This question requires
you to play this game beyond Level 5. Do the screen video of your codes and
actions as you make progress from one stage to the other, ensure your face
appears while you explain your steps:
`See the game here: https://xss-game.appspot.com/`

3- Create a mini web application for users, show user profile and login interfaces:
Demo an SQL injection attack that will:
i. Login without a valid password
ii. Retrieve all data from the table without a valid where clause
statement

Use Ubuntu 16.04, it is 32bit.
Resources: Install virtual box
https://www.virtualmetric.com/blog/how-to-enable-hardware-virtualization
https://www.virtualbox.org/wiki/Download_Old_Builds_6_0
Setup ubuntu https://releases.ubuntu.com/16.04/

Deliverables: Video demo of your implementation with your face at the corner of
your screen. You will talk and explain over the video as the program runs; you will
tell how you set the environment, run each command, and tell what each command
does, and their outputs shown on screen.
