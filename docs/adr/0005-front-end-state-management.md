# 0005. Front-End State Management
 
Date: 2021-03-31
	
 
## Status
 
Completed
 
## Context

Front-end state management 
 
## Decision
 
- elements & components will not connect to external services
- modules will manage asynchronous state change for modules
  - using [rxjs](https://github.com/ReactiveX/rxjs) for composing asynchronous and event-based elements by using observable sequences
  - using [tsyringe](https://github.com/microsoft/tsyringe) for IOC  
  - using [signalr](https://dotnet.microsoft.com/apps/aspnet/signalr) for asynchronous interactions with the server
  
## Consequences
 
- this library will *not* use stencil Redux for state management
- code will be simpler
- reduction of library bloat
