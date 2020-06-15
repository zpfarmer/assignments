# The following is not only asking the user for input of a number, but also asigning the number input to a variable

num = int(input("Give me a number to determine if it is odd or even: "))


# using a if else statement and a modulus operator, I take whatever number the user has given and figure out what the remainder is.
# if the remainder is zero then it is even, if not it is odd
if (num % 2) == 0:
    print("{0} is an Even number".format(num))
else: 
    print("{0} is and Odd number".format(num))