# Documentation

## Vetrify Overview

Vetrify is a strategic technology innovation tool.  We help customers innovate and streamline technological processes and solutions from strategy and ideation through the technology manufacturing process.

----

## Vetrify User Interface Domain Overview

The Vetrify application is a suite of `'document'` micro-applications sharing a common foundation.  The `'documents'` are related from a business workflow perspective but function as independent micro-applications.

----

### Foundation

The foundation addresses cross-cutting concerns such as
* Projects
* Users
* Tasks
* Events
* Account behaviors
* Common account definitions/lexicon

----

### Documents

Documents are micro-applications function withing the context of the foundation.  Each document has its data model defined with [json schema](https://json-schema.org/).  Document state is stored in a semi-structured relational store at the document level.

All business logic resides on the server.

User interface `'documents'` are worked on locally by users.  When users save their work, the changes are sent in aggregate through a backing service (rest). Changes from other users are coordinated on the server and users are notified of state changes asynchronously through web sockets.

Document Types
* Strategy
  * Business Strategy
  * Technical Strategy
  * Project Management Strategy
  * User Experience Strategy
  * etc.
* Project Requirement
  * Business Process Requirements
  * User Experience Requirements
  * Technical Requirements
  * Project Requirements
  * etc.
* Project Document
  * Broadband Estimates
  * Detailed Estimates
  * Earned Value Tracking
  * Project Overview
  * etc.
* Analysis
  * Business Requirement FMECA (Failure Mode Effects Criticality Analysis)
  * User Experience Requirement FMECA
  * Technical Requirement FMECA
  * Project Execution Requirement FMECA
  * etc.
* Plan
  * Project Plan
  * Business Plan
  * Account Plan
  * etc
* Feedback

----

## Logical Domain Entity Relationship Diagram

![domain](./assets/images/domain.png)

----

## [ADR (Architectural Decision Records)](./adr/readme.md)

An Architecture Decision Record (ADR) is a document that captures a decision, including the context of how the decision was made and the consequences of adopting the decision.  At Vetrify we use ADRs to document technical decisions.

----

## Font-End Component Architecture

Vetrify is an asynchronous, modular application.

The application is a series of user interface `'documents'`, each of which is a self-contained SPA (single page app).  Every user interface `'document'` is composed using web components in [stenciljs](https://stenciljs.com/).  State for each `'document'` is defined in [json-schema](https://json-schema.org/).  The typescript representation of the json schema is compiled as part of the build process.

User interface web components should be scoped based on volatility. For example, cross-cutting concerns that appear on every page, like navigation, will be separated from document-specific modules.  

Each user interface `'document'` is composed using multiple reusable, but independent `'module'` web components.  `'Module'` web components expose business value and are constructed with multiple `'component'` and `'element'` web components.  `'Elements'` are small reusable web components without any references to other web components.  `'Components'` are more complex multi-purpose aggregates of multiple '`element'` web components.

----

### Element

Elements are the core building blocks for assembling the user experience.
* Icons
* Buttons
* Drop-Downs
* etc.

Rules
* elements may not reference other elements, components, or modules 
* elements may not have slots
* elements may not have references to components or mod

----

### Component

Components are higher-order web components that use multiple elements to provide functionality, but are domain-agnostic. 

Rules
* components should not contain other components or modules
* components should compose elements
* components have slots for dynamic elements

----

### Module

Modules are domain-specific building blocks for user experience.  Modules are composed of multiple components and elements.  Modules should be the primary point of management for all their modules and elements.  They may wire-up state management of their parts through rxjs observables.

Rules
* modules should not reference other modules
* modules should maintain state using a source service

----

### Source Service

Source services are used as singletons to manage state and are the single point of external communication.

Source services may call rest interfaces and register with web socket providers for push notifications.

Rules
* `source` services may only be referenced by hosting pages, templates, and modules.
* components and elements should **not** reference source services. 

----

### Template

Template components are used to demonstrate combining multiple `modules` and the `source` services.

----

### UI Architecture Diagram

![arch](./assets/images/front-end-architecture.png)