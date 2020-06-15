# Assigning a value for PI and asking what the radius is of the circle
PI = 3.14
r = float(input("What is the radius of your circle?"))

# taking PI, 3.14, and multiplying it by the input twice
area = PI * r * r

# printing the answer
print("The area of your circle is: %.2f" %area)