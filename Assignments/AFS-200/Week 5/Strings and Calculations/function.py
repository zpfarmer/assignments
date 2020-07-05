#a function set up to find the max of two diffent numbers
#if x is more than y, it will return x, or vice versa

def max_of_two( x, y ):
    if x > y:
        return x
    return y

#another function to find the greatest number of 3 given numbers
#uses the previous function to decide if x or y is greater
def max_of_three( x, y, z ):
    return max_of_two( x, max_of_two( y, z ) )
print (max_of_three(23, 41, 27))