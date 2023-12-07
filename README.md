# NuitInfo2023

# API

### Url de base de l'api : 

## Routes :
 - GET /tetris/get-leaderboard  
   - Descriptions : Retrieves all of the scores from the database 
   - Input : none
   - Return : all of the scored of tetris in the database

 - POST /tetris/new-score
   - Description : Adds a score to the scores table
   - Input : username@string, score@Integer