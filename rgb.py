#!/usr/bin/env python
#Author: Nazmus Nasir
#Website: https://www.EasyProgramming.net

import pigpio
import sys

red = sys.argv[1]
green = sys.argv[2]
blue = sys.argv[3]

pi = pigpio.pi()

#old 17,24,22
#replace first argument below with the GPIO Pin number associated with the specified color
pi.set_PWM_dutycycle(18,red)
pi.set_PWM_dutycycle(24,green)
pi.set_PWM_dutycycle(20,blue)
