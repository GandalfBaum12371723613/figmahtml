function showStartScreen(userType) {
    document.getElementById('challengeScreen').classList.add('hidden');
    document.getElementById('userTypeScreen').classList.remove('hidden');
  }

  function showLoginScreen(userType) {
    document.getElementById('userTypeScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
  }

  function showChallengeScreen() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('challengeScreen').classList.remove('hidden');
  }

  function showChallenge(challengeId) {
    document.getElementById('challengeScreen').classList.add('hidden');
    document.getElementById('challengeDetailScreen').classList.remove('hidden');
  }

  function toggleChallenge() {
    const button = document.getElementById('startStopButton');
    if (button.textContent === 'Start') {
      button.textContent = 'Stop';
      // Here you would start the camera and the challenge
    } else {
      button.textContent = 'Start';
      document.getElementById('challengeDetailScreen').classList.add('hidden');
      document.getElementById('challengeResultScreen').classList.remove('hidden');
      // Here you would stop the camera and the challenge
    }
  }

  function retryChallenge() {
    document.getElementById('challengeResultScreen').classList.add('hidden');
    document.getElementById('challengeDetailScreen').classList.remove('hidden');
    document.getElementById('startStopButton').textContent = 'Start';
  }

  function goBack() {
    document.getElementById('challengeResultScreen').classList.add('hidden');
    document.getElementById('challengeScreen').classList.remove('hidden');
  }