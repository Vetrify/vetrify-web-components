import { BehaviorSubject } from "rxjs";  // reactive events on UI
import * as signalR from "@microsoft/signalr";  // recieve push messages from server
import { Doc, DocRelationship, DocVersion, Project, ProjectEvent, ProjectRole, Task, TaskAssignment, User, VetrifyFoundation } from "../../types/foundation.schema-0.0.1";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/foundationHub")
    .build();

connection.on("messageReceived", (username: string, message: string) => {
    // todo: wire-up implementation here

    console.info(`user name: ${username} - message: ${message}`);
    //let m = document.createElement("div");

    // m.innerHTML =
    //     `<div class="message-author">${username}</div><div>${message}</div>`;

    // divMessages.appendChild(m);
    // divMessages.scrollTop = divMessages.scrollHeight;
});

connection.start().catch(err => document.write(err));

interface IFoundationServiceController{
    Foundation: BehaviorSubject<VetrifyFoundation>;
    Users: BehaviorSubject<User[]>;
    Tasks:  BehaviorSubject<Task[]>;
    ProjectEventTasks: BehaviorSubject<[string, string][]>;
    TaskAssignments:  BehaviorSubject<TaskAssignment[]>; 
    Projects : BehaviorSubject<Project[]>;
    ProjectRoles: BehaviorSubject<ProjectRole[]>;
    ProjectEvents: BehaviorSubject<ProjectEvent[]>;
    Docs: BehaviorSubject<Doc[]>;
    DocRelationships: BehaviorSubject<DocRelationship[]>;
    DocVersions: BehaviorSubject<DocVersion[]>;

    // TODO: add methods
}



class FoundationServiceController implements IFoundationServiceController
{
    public Foundation: BehaviorSubject<VetrifyFoundation> = new BehaviorSubject<VetrifyFoundation>({});
    //private testFoundation: VetrifyFoundation = {}; // Just for testing
  
    public Users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    public Tasks:  BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    public ProjectEventTasks: BehaviorSubject<[string, string][]> = new BehaviorSubject<[string, string][]>([]);
    public TaskAssignments:  BehaviorSubject<TaskAssignment[]> = new BehaviorSubject<TaskAssignment[]>([]); 
    public Projects : BehaviorSubject<Project[]>= new BehaviorSubject<Project[]>([]);
    public ProjectRoles: BehaviorSubject<ProjectRole[]>= new BehaviorSubject<ProjectRole[]>([]);
    public ProjectEvents: BehaviorSubject<ProjectEvent[]>= new BehaviorSubject<ProjectEvent[]>([]);
    public Docs: BehaviorSubject<Doc[]>= new BehaviorSubject<Doc[]>([]);
    public DocRelationships: BehaviorSubject<DocRelationship[]>= new BehaviorSubject<DocRelationship[]>([]);
    public DocVersions: BehaviorSubject<DocVersion[]>= new BehaviorSubject<DocVersion[]>([]);

    constructor() {}

  async loadFoundation() {
    if (this.Foundation) {
      return this.Foundation;
    } else {
      // Load data and then...
      
      //this.updateFoundation();
      
      return this.Foundation;
    }
  }

  /* persist the local changes to the web service */
  async saveFoundation() {

    if(! this.Foundation){
        return;
    }
    
    var f = this.Foundation.value;
    f.documentRelationships = this.DocRelationships.value;
    f.documentVersions = this.DocVersions.value;
    f.documents = this.Docs.value;
    f.projectEventTasks = this.ProjectEventTasks.value;
    f.projects = this.Projects.value;
    f.projectEvents = this.ProjectEvents.value;
    f.projectRoles = this.ProjectRoles.value;
    f.taskAssignments = this.TaskAssignments.value;
    f.tasks = this.Tasks.value;
    f.users = this.Users.value;

    // Save data and then...
    // get latest and then
    //this.updateFoundation();

  }

  async getFoundationData() {
    const data = await this.loadFoundation();
    return data;
  }

  updateFoundation(data: VetrifyFoundation) {
      this.Foundation.next(data);
      this.DocRelationships.next(data.docRelationships);
      this.DocVersions.next(data.docVersions);
      this.Docs.next(data.docs);
      this.ProjectEvents.next(data.projectEvents);
      this.ProjectRoles.next(data.projectRoles);
      this.Projects.next(data.projects);
      this.TaskAssignments.next(data.taskAssignments);
      this.Tasks.next(data.tasks);
      this.Users.next(data.users);
  }

  upsertTask(data: Task){
      
    var arr = this.Tasks.value;
    var i = arr.findIndex(x => x.$id == data.$id);

      if(i<0){
          arr[i]=data;
      }
      else{
          arr= arr.concat(data);
      }

      this.Tasks.next(arr);
  }

  deleteTask($id:string)
  {
      var tsk = this.Tasks.value.find(x => x.$id == $id);



      if(tsk)
      {
        tsk.viewState.status = "deleted";
        tsk.viewState.hidden = true;

        this.Tasks.next(this.Tasks.value); // notify listeners of change

        // ?? - var remaining = this.Tasks.value.filter(x => x.$id != $id);
        
        // ?? this.Tasks.next(remaining);
      }
  }

}

export const FoundationService:IFoundationServiceController = new FoundationServiceController();

// TODO: IOC testing https://github.com/microsoft/tsyringe