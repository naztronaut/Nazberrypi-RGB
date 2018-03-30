# Nazberrypi-RGB
RGB LED Strip Light control using Raspberry Pi 3, Raspberry Pi Zero, and a basic HTML/JS Site

## Software Requirements
1. PIGPIO library installed on your pi - [PIGPIO Library](http://abyz.me.uk/rpi/pigpio/pigpiod.html)
2. PHP 5+
3. jQuery/Bootstrap libraries for the layout and AJAX. Can use a CDN or locally downloaded version 
4. [jscolor picker](http://jscolor.com/examples/) library 

## Hardware Requirements
1. Raspberry Pi (this has been tested with Pi 3 and Pi Zero/W)
2. Three MOSFET Transistors Type N-Channel - should be a logic-level transistor. E.g. IRL2203 or IRLU024
3. RGB LED Strip
4. Connectors/Wires and Power sources for Pi and Lights

### Author
Nazmus Nasir - [Easy Programming](https://www.easyprogramming.net)

## Notes
Due to my beginner knowlege of Python, there's a layer of PHP between the JavaScript and actual Python being executed on the Pi. 
This has been tested on Raspbery Pi 3 and Raspberry Pi Zero.
I'll keep updating this when I have time and eventually include a diagram of the connections. 