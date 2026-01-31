class Student:
    def __init__ (self, name, marks):
        self.name = name
        self.marks = marks

    def is_pass(self):
        print(f'Name:{self.name}, Marks:{self.marks}')
        return self.marks >= 40
    
s1 = Student("Asha", 35)
s2 = Student("Usha", 65)
s3 = Student("Isha", 15)

print(s1.is_pass())
print(s2.is_pass())
print(s3.is_pass())


