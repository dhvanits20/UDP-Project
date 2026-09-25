import tkinter as tk
from tkinter import messagebox
import random

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic Tac Toe")
        self.root.geometry("500x600")
        self.root.resizable(False, False)
        self.root.configure(bg="#2C3E50")
        
        # Game variables
        self.current_player = "X"
        self.board = [""] * 9
        self.buttons = []
        self.score_x = 0
        self.score_o = 0
        self.game_mode = None  # 'pvp' or 'pvc'
        
        self.create_mode_selection()
    
    def create_mode_selection(self):
        """Create mode selection screen"""
        self.clear_window()
        
        # Title
        title = tk.Label(
            self.root,
            text="TIC TAC TOE",
            font=("Arial", 36, "bold"),
            bg="#2C3E50",
            fg="#ECF0F1"
        )
        title.pack(pady=50)
        
        # Subtitle
        subtitle = tk.Label(
            self.root,
            text="Choose Game Mode",
            font=("Arial", 18),
            bg="#2C3E50",
            fg="#BDC3C7"
        )
        subtitle.pack(pady=20)
        
        # Player vs Player button
        pvp_btn = tk.Button(
            self.root,
            text="👥 Player vs Player",
            font=("Arial", 16, "bold"),
            bg="#3498DB",
            fg="white",
            width=20,
            height=2,
            command=lambda: self.start_game('pvp'),
            cursor="hand2",
            relief=tk.FLAT,
            activebackground="#2980B9",
            activeforeground="white"
        )
        pvp_btn.pack(pady=15)
        
        # Player vs Computer button
        pvc_btn = tk.Button(
            self.root,
            text="🤖 Player vs Computer",
            font=("Arial", 16, "bold"),
            bg="#E74C3C",
            fg="white",
            width=20,
            height=2,
            command=lambda: self.start_game('pvc'),
            cursor="hand2",
            relief=tk.FLAT,
            activebackground="#C0392B",
            activeforeground="white"
        )
        pvc_btn.pack(pady=15)
    
    def clear_window(self):
        """Clear all widgets from window"""
        for widget in self.root.winfo_children():
            widget.destroy()
    
    def start_game(self, mode):
        """Start the game with selected mode"""
        self.game_mode = mode
        self.create_game_interface()
    
    def create_game_interface(self):
        """Create the main game interface"""
        self.clear_window()
        
        # Header frame
        header_frame = tk.Frame(self.root, bg="#2C3E50")
        header_frame.pack(pady=20)
        
        # Title
        title = tk.Label(
            header_frame,
            text="TIC TAC TOE",
            font=("Arial", 24, "bold"),
            bg="#2C3E50",
            fg="#ECF0F1"
        )
        title.pack()
        
        # Score frame
        score_frame = tk.Frame(self.root, bg="#34495E", relief=tk.RAISED, bd=3)
        score_frame.pack(pady=10)
        
        # Player X score
        x_label = tk.Label(
            score_frame,
            text=f"Player X: {self.score_x}",
            font=("Arial", 14, "bold"),
            bg="#34495E",
            fg="#3498DB",
            padx=20,
            pady=5
        )
        x_label.grid(row=0, column=0, padx=10)
        
        # Player O score
        o_label = tk.Label(
            score_frame,
            text=f"Player O: {self.score_o}",
            font=("Arial", 14, "bold"),
            bg="#34495E",
            fg="#E74C3C",
            padx=20,
            pady=5
        )
        o_label.grid(row=0, column=1, padx=10)
        
        self.score_label_x = x_label
        self.score_label_o = o_label
        
        # Turn indicator
        self.turn_label = tk.Label(
            self.root,
            text=f"Player {self.current_player}'s Turn",
            font=("Arial", 16, "bold"),
            bg="#2C3E50",
            fg="#F39C12"
        )
        self.turn_label.pack(pady=10)
        
        # Game board frame
        board_frame = tk.Frame(self.root, bg="#2C3E50")
        board_frame.pack(pady=10)
        
        # Create 3x3 grid of buttons
        self.buttons = []
        for i in range(9):
            button = tk.Button(
                board_frame,
                text="",
                font=("Arial", 32, "bold"),
                width=4,
                height=2,
                bg="#ECF0F1",
                fg="#2C3E50",
                command=lambda idx=i: self.make_move(idx),
                cursor="hand2",
                relief=tk.RAISED,
                bd=3,
                activebackground="#BDC3C7"
            )
            button.grid(row=i//3, column=i%3, padx=5, pady=5)
            self.buttons.append(button)
        
        # Control buttons frame
        control_frame = tk.Frame(self.root, bg="#2C3E50")
        control_frame.pack(pady=20)
        
        # Reset button
        reset_btn = tk.Button(
            control_frame,
            text="🔄 Reset Game",
            font=("Arial", 12, "bold"),
            bg="#95A5A6",
            fg="white",
            command=self.reset_game,
            cursor="hand2",
            relief=tk.FLAT,
            padx=15,
            pady=5,
            activebackground="#7F8C8D"
        )
        reset_btn.grid(row=0, column=0, padx=10)
        
        # Back to menu button
        menu_btn = tk.Button(
            control_frame,
            text="🏠 Main Menu",
            font=("Arial", 12, "bold"),
            bg="#9B59B6",
            fg="white",
            command=self.back_to_menu,
            cursor="hand2",
            relief=tk.FLAT,
            padx=15,
            pady=5,
            activebackground="#8E44AD"
        )
        menu_btn.grid(row=0, column=1, padx=10)
    
    def make_move(self, index):
        """Handle player move"""
        if self.board[index] == "" and not self.check_winner():
            self.board[index] = self.current_player
            self.buttons[index].config(
                text=self.current_player,
                fg="#3498DB" if self.current_player == "X" else "#E74C3C",
                state=tk.DISABLED
            )
            
            if self.check_winner():
                self.end_game(f"Player {self.current_player} Wins! 🎉")
                if self.current_player == "X":
                    self.score_x += 1
                else:
                    self.score_o += 1
                self.update_scores()
            elif "" not in self.board:
                self.end_game("It's a Draw! 🤝")
            else:
                # Switch player
                self.current_player = "O" if self.current_player == "X" else "X"
                self.turn_label.config(text=f"Player {self.current_player}'s Turn")
                
                # If playing against computer and it's O's turn
                if self.game_mode == 'pvc' and self.current_player == "O":
                    self.root.after(500, self.computer_move)
    
    def computer_move(self):
        """AI move for computer player"""
        # Check if computer can win
        move = self.find_winning_move("O")
        if move is not None:
            self.make_move(move)
            return
        
        # Check if need to block player
        move = self.find_winning_move("X")
        if move is not None:
            self.make_move(move)
            return
        
        # Take center if available
        if self.board[4] == "":
            self.make_move(4)
            return
        
        # Take a corner
        corners = [0, 2, 6, 8]
        available_corners = [i for i in corners if self.board[i] == ""]
        if available_corners:
            self.make_move(random.choice(available_corners))
            return
        
        # Take any available space
        available = [i for i in range(9) if self.board[i] == ""]
        if available:
            self.make_move(random.choice(available))
    
    def find_winning_move(self, player):
        """Find a winning move for the given player"""
        winning_combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
            [0, 4, 8], [2, 4, 6]              # Diagonals
        ]
        
        for combo in winning_combinations:
            values = [self.board[i] for i in combo]
            if values.count(player) == 2 and values.count("") == 1:
                return combo[values.index("")]
        return None
    
    def check_winner(self):
        """Check if there's a winner"""
        winning_combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
            [0, 4, 8], [2, 4, 6]              # Diagonals
        ]
        
        for combo in winning_combinations:
            if (self.board[combo[0]] == self.board[combo[1]] == 
                self.board[combo[2]] != ""):
                # Highlight winning combination
                for idx in combo:
                    self.buttons[idx].config(bg="#F39C12")
                return True
        return False
    
    def end_game(self, message):
        """End the game and show result"""
        messagebox.showinfo("Game Over", message)
        self.root.after(100, self.reset_game)
    
    def update_scores(self):
        """Update score display"""
        self.score_label_x.config(text=f"Player X: {self.score_x}")
        self.score_label_o.config(text=f"Player O: {self.score_o}")
    
    def reset_game(self):
        """Reset the game board"""
        self.board = [""] * 9
        self.current_player = "X"
        for button in self.buttons:
            button.config(
                text="",
                bg="#ECF0F1",
                state=tk.NORMAL
            )
        self.turn_label.config(text=f"Player {self.current_player}'s Turn")
    
    def back_to_menu(self):
        """Return to main menu"""
        self.score_x = 0
        self.score_o = 0
        self.board = [""] * 9
        self.current_player = "X"
        self.create_mode_selection()

if __name__ == "__main__":
    root = tk.Tk()
    game = TicTacToe(root)
    root.mainloop()
