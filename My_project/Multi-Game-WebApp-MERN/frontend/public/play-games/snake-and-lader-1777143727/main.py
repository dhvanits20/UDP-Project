#Snakes and Ladders using Python - www.101computing.net/snakes-and-ladders-using-python/
import turtle
import random

screen = turtle.Screen()

def movePlayer(player, position):
   yPos = (position-1) // 10
   xPos = (position-1) % 10
   y = -170 + yPos * 37
   if yPos%2 == 0:
      x = -170 + xPos * 38
   else:
      x = 170 - xPos * 38
   player.goto(x,y)


# Setup the Snakes & Ladders board
screen.setup(400, 400)
screen.bgpic("images/snakes-and-ladders.png")

# Initialise first player...
player1 = turtle.Turtle()
player1.shape("circle")
player1.speed(5)
player1.color("#810081")
player1.pensize(15)
player1.penup()

# Position the first player to the bottom left corner of the board (Position 1)
player1Position = 1
movePlayer(player1, player1Position)

gameOver=False
while not gameOver:
   print("Player 1:")
   input("Press enter to throw the dice...")
   #Throw the dice...
   dice = random.randint(1,6)
   print("You've rolled a " + str(dice))
  
   #Calculate the new position of the player based on the dice value
   player1Position = player1Position + dice
   movePlayer(player1, player1Position)
  
   #Check if the player lands on a ladder (to climb up) or on a snake (slide down)
   if player1Position == 5:
      print("Climbing up the ladder!")
      player1Position = 35
   elif player1Position == 8:
      print("Climbing up the ladder!")
      player1Position = 13
   #...   
   #... Add more code here to check every ladder and every snake!  ...#
   #...
  
   if player1Position>100:
      #Bounce back
      player1Position = 100 - (player1Position-100)
    
   # Move player on the board to the new position  
   print("Player 1 position: " + str(player1Position))
   movePlayer(player1, player1Position)
  
   # Have we got a winner?
   if player1Position == 100:
      print("---- Player 1 wins!!! ----")
      gameOver = True
 
