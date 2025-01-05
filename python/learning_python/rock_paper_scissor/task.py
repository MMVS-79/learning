import random

# Rock Paper Scissors ASCII Art

# Rock
rock =("""
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
""")

# Paper
paper = ("""
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
""")

# Scissors
scissors = ("""
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
""")

choices =[rock,paper,scissors]
computer_choice=random.randint(0, len(choices) - 1)

# Prompt the user for input
user_input = input("Enter your response numerically (rock (0),paper (1) ,scissors (2)): ")

try:
    # Attempt to convert input to an integer
    user_input = int(user_input)
except ValueError:
    # Handle invalid input
    print("Invalid input! Please enter a valid number.")
else:
    # This block executes only if the try block succeeds
    if 0 <= user_input <= 2:
        if computer_choice==2 and user_input==0:
            print("computer chose" + " " + choices[computer_choice])
            print("you chose" + " " + choices[user_input])
            print("You win!")
        elif computer_choice==0 and user_input==1:
            print("computer chose" + " " + choices[computer_choice])
            print("you chose" + " " + choices[user_input])
            print("You win!")
        elif computer_choice==1 and user_input==2:
            print("computer chose" + " " + choices[computer_choice])
            print("you chose" + " " + choices[user_input])
            print("You win!")
        elif computer_choice==0 and user_input==2:
            print("computer chose" + " " + choices[computer_choice])
            print("you chose" + " " + choices[user_input])
            print("You lose!")
        elif computer_choice==1 and user_input==0:
            print("computer chose" + " " + choices[computer_choice])
            print("you chose" + " " + choices[user_input])
            print("You lose!")
        else:
            print("computer chose" + " " + choices[computer_choice])
            print("you chose" + " " + choices[user_input])
            print("Draw!")      
    else:
        print("Invalid input. Please try again.")


