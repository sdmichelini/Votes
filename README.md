# Voting App #

## Description ##

Website that allows people to vote.

## System Requirements ##

### Privacy ###

- All Users must be Authenticated
- All Votes of a User Must Be Private

### Eligibility ###

- All Users Must be Present to Vote
- Secretary may enforce voting privileges

### Secretary Oversee ###

- The Secretary Marks People as Present
- The Secretary Starts and Ends all Ballots
- The Secretary is Responsible for Maintaining the Ballot
- The Secretary must be able to see vote counts

### Votes ###

- Three Types: Yes, No, and an Abstention

## Technical Requirements ##

### Real-Time Voting ###

- System must be fast
- Secretary must be able to see live voting

### Supported Devices ###

- All platforms must be able to easily use Website
- All features available on all platforms

## Implementation ##

### Routing ###

- All in routes folder, secretary routes in separate folder

### Views ###

- Implemented in Jade
- Make templates smart. Should never have a rendering error. Always notify user of error.
- Bootstrap CSS 
