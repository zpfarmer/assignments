class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.nextval = None

class SLinkedList:
    def __init__(self):
        self.headval = None

    def listprint(self):
        printval = self.headval
        while printval is not None:
            print (printval.dataval)
            printval = printval.nextval
    def AtBeginning(self, newdata):
        NewNode = Node(newdata)

        NewNode.nextval = self.headval
        self.headval = NewNode

list = SLinkedList()
list.headval = Node("Python")
e2 = Node("C#")
e3 = Node("C++")
e4 = Node("Java")

list.headval.nextval = e2

e2.nextval = e3
e3.nextval = e4

list.AtBeginning("PHP")

list.listprint()