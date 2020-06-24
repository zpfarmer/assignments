#importing random module
import random

#telling the user to guess
print("Guess the number!")

#the number will be between 1 and 9
number = random.randint(1,9)

chances = 0

#telling the user the range of numbers
print("Guess a number between 1 and 10")

#giving the user up to 5 chances to get the answer right
while chances < 5: 
    #assigning the input as a guess
    guess = int(input())
    #if the guess is correct, prints this and break ends the game
    if guess == number:
        print("You got it right!")
        break
    #if the guess is less than the number, it will give this hint
    elif guess < number: 
        print("Guess again! Your number was too low")
    #otherwise it will give this hint
    else: 
        print("Guess again! Your number was too high")
    #adding +1 to the chances for each guess
    chances += 1
#if the chances hits 5, the user loses and is told what the correct number is!
if not chances < 5: 
    print("You lose, the number is", number)