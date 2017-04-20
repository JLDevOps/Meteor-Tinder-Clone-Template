# Meteor-Tinder-Clone-Template
A Tinder-Clone template that is developed in Meteor.js.

This is the finished product of Sam Corcos's tutorial on [Meteor-React-Ionic Mobile Tinder App](https://medium.com/@SamCorcos/meteor-react-ionic-mobile-app-part-1-the-basic-template-9355ebf3397f)

(Please note: this was tested on OSX Sierra)

## Demo
<img src="https://github.com/JLDevOps/Meteor-Tinder-Clone-Template/raw/master/pics/tinder-clone.gif" width="300px">

## Quick Guide

## Installation Guide
(Run these commands in your terminal)

1. Install/Update HomeBrew
    1. If installing: 
        ```sh
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        ```
    2. If updating:  
        ```sh
        brew update
        ```
2. Install/Update NPM
    1. If installing: 
        ```sh
        brew install node
        ```
    2. If updating:  
        ```sh  
        npm update
        ```
3. Install Cordova & Ionic
    1. If installing: 
        ```sh
        npm install -g cordova ionic
        ```
4. Install Meteor.js
    1. If installing: 
        ```sh
        curl https://install.meteor.com/ | sh
        ```
5. Installing React-Native
    1. If installing: 
        ```sh
        npm init
        npm install --save react react-dom
        ```

## How to Run
1. Unzip the downloaded zip file 
    ```sh
    unzip Meteor-Tinder-Clone-Template.zip 
    ```
2. Create a meteor app with a folder name
    ```sh
    meteor create tinder-clone
    ```
3. Either drag and copy the files from the zip folder over to the app folder or use:
    ```sh
    cp -a /Metor-Tinder-Clone/. /tinder-clone/
    ```
4. Go into the folder 
    ```sh
    cd tinder-clone
    ```
5.  Run this command to start the project 
    ```sh
    meteor run 
    ```

## Q & A

Q. "I am getting an error message to add packages."

A. Please take a look at Sam Corcos's tutorial on [Meteor-React-Ionic Mobile Tinder App](https://medium.com/@SamCorcos/meteor-react-ionic-mobile-app-part-1-the-basic-template-9355ebf3397f) for the necessary packages that are needed for meteor.
