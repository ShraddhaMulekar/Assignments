#Student Score Manager

students = []

def add_student_data (name, mark):
    students.append({
        "name":name,
        "mark": mark
    })

def average_marks():
    total=0
    for student in students:
        total += student['mark']
        # print("total marks per student:", student['mark'])
    # print("total marks all students:", total)
    
    return total / len(students)

try:
    add_student_data("Amit", 80)
    add_student_data("Neha", 90)
    add_student_data("Shraddha", int("85"))

    avg = average_marks()
    print("Average Marks:", avg)
except:
    print("Invalid data entered")