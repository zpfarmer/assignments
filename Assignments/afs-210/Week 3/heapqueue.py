#google heapq for more information and a list of what all commands you can use with it
import heapq as hq
#original list
list = [25, 35, 22, 85, 14, 65, 75, 22, 58]

print("Original list:")
print(list)
#using heapq as hq
#nlargest command will return with however many items from the list the user wants
#nsmallest is the opposite of this command, will return that smallest elements from a list
largest_3 = hq.nlargest(3, list)
#printing the 3 largest that I just created above
print("\nThe three largest numbers are", largest_3)