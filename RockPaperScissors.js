import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';

class RockPaperScissors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: null,
      computerChoice: null,
      result: "hi"
    };
  }

  // Function to handle the player's choice
  handleChoice(choice) {
    // Generate a random number to simulate the computer's choice
    const computerChoice = Math.floor(Math.random() * 3);
    <Text>{this.state.result}</Text>
    let result;
    // Compare the player's choice to the computer's choice to determine the winner
    if (choice === computerChoice) {
      result = "Tie";
    } else if (
      (choice === 0 && computerChoice === 2) ||
      (choice === 1 && computerChoice === 0) ||
      (choice === 2 && computerChoice === 1)
    ) {
      result = "You win!";
    } else {
      result = "You lose.";
    }
    // Update the game state with the player's and computer's choices and the result
    this.setState({
      playerChoice: choice,
      computerChoice: computerChoice,
      result: result
    });
  }

  render() {
    return (
        <View style={styles.container}>        
            {/* Display the result of the game */}
            <Text>{this.state.result}</Text>
            {/* Render Buttons for the player to choose rock, paper, or scissors */}
            <Button onPress={() => this.handleChoice(1)} title="Rock"></Button>
            <Button onPress={() => this.handleChoice(1)} title="Paper"></Button>
            <Button onPress={() => this.handleChoice(2)} title="Scissors"></Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default RockPaperScissors