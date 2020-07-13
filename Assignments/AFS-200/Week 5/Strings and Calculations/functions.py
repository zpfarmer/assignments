#a function to test a string, the uppercase and lowercase count will both start at 0
#if the letter is uppercase, add one to the count for UPPER_CASE, same for LOWER_CASE
#if a letter is not uppercase or lowercase (a number perhaps) then the function will 'pass' it and not count it

def string_test(s):
    d={"UPPER_CASE":0, "LOWER_CASE":0}
    for c in s: 
        if c.isupper():
            d["UPPER_CASE"]+=1
        elif c.islower():
            d["LOWER_CASE"]+=1
        else: 
            pass

#printing to the console what the original string is and the count for each upper and lower
    print ("Original String : ", s)
    print ("Number of Upper case characters : ", d["UPPER_CASE"])
    print ("Number of Lower case characters : ", d["LOWER_CASE"])

#creating a string to be used by the 'string_test" function
#this string is what will be used to increment the counts
string_test('Have a WONDERFUL day!')