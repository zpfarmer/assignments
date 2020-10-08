class Node:

    def __init__(self, data):

        self.left = None
        self.right = None
        self.data = data

    def insert(self, data):

        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else: 
                    self.left.insert(data)
            elif data > self.data:
                if self.right is None:
                    self.right = Node(data)

        else:
            self.data = data

    def PrintTree(self):
        if self.left:
            self.left.PrintTree()
        print(self.data),
        if self.right:
            self.right.PrintTree()

root = Node(142)
root.insert(87)
root.insert(201)
root.insert(35)
root.insert(29)

root.PrintTree()