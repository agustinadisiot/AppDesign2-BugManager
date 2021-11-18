(self.webpackChunkbug_manager=self.webpackChunkbug_manager||[]).push([[852],{2230:(e,t,n)=>{"use strict";n.d(t,{n:()=>Z});var o=n(3679),i=n(4875),s=n(7716),r=n(3472),a=n(354),l=n(7135),g=n(805),c=n(9098),d=n(6802),u=n(2813),h=n(8583),p=n(7935),m=n(3652),f=n(2964);function b(e,t){if(1&e&&(s.TgZ(0,"mat-option",13),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e.id),s.xp6(1),s.hij("",e.name," ")}}function v(e,t){if(1&e&&(s.TgZ(0,"mat-option",13),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e.id),s.xp6(1),s.Oqu(e.username)}}let Z=(()=>{class e{constructor(e,t,n,s){this.route=e,this.projectService=t,this.devService=n,this.bugService=s,this.loading=!1,this.infoMessage={error:!0,text:""},this.form=new o.cw({name:new o.NI("",[o.kI.required]),description:new o.NI("",[o.kI.required]),project:new o.NI("",[o.kI.required]),version:new o.NI("",[o.kI.required]),time:new o.NI("",[o.kI.required]),isActive:new o.NI("",[])}),this.projects=[],this.devs=[],this.display=i.s.IsActiveAsResolve,this.bug={name:"",description:"",version:"",time:0,projectId:0,projectName:"",isActive:!0}}ngOnInit(){this.loadProjects(),this.loadBug()}loadProjects(){this.projectService.getProjects().subscribe(e=>{this.loading=!1,this.projects=e,0==this.projects.length&&(this.infoMessage={error:!0,text:"You don't have any assigned projects yet"})},e=>{this.loading=!1,this.infoMessage.error=!0,this.infoMessage.text=`Problem loading projects: ${e}`})}loadDevs(){this.projectService.getDevelopers(this.selectedProjectId).subscribe(e=>{this.loading=!1,this.devs=e},e=>{this.loading=!1,this.infoMessage.error=!0,this.infoMessage.text=`Problem loading developers: ${e}`}),this.devs=[]}loadBug(){let e=this.route.snapshot.queryParams.id;null!=e&&this.bugService.getBug(e).subscribe(e=>{this.loading=!1,this.bug=e,this.selectedProjectId=this.bug.projectId,this.loadDevs(),this.selectedDevId=this.bug.completedById||void 0},e=>{this.loading=!1,this.infoMessage.error=!0,this.infoMessage.text=`Problem loading bug: ${e}`})}save(){var e;this.loading=!0,this.bug.projectId=this.selectedProjectId,this.bug.projectName=(null===(e=this.projects.find(e=>e.id==this.selectedProjectId))||void 0===e?void 0:e.name)||"",this.bug.completedById=this.bug.isActive?void 0:this.selectedDevId;let t=this.route.snapshot.queryParams.id;null==t?this.createBug():this.editBug(t)}createBug(){this.bugService.createBug(this.bug).subscribe(e=>{this.loading=!1,this.infoMessage.error=!1,this.infoMessage.text=`Bug "${this.bug.name}" added successfully`,this.bug={name:"",description:"",version:"",time:0,projectId:0,projectName:"",isActive:!0},this.form.markAsUntouched()},e=>{this.loading=!1,this.infoMessage.error=!0,this.infoMessage.text=e})}editBug(e){this.bugService.editBug(e,this.bug).subscribe(e=>{this.loading=!1,this.infoMessage.error=!1,this.infoMessage.text=`Bug "${this.bug.name}" edited successfully`},e=>{this.loading=!1,this.infoMessage.error=!0,this.infoMessage.text=e})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.gz),s.Y36(a.m),s.Y36(l.k),s.Y36(g.H))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-bug-form"]],decls:38,vars:18,consts:[["title","Bug",3,"form","infoMessage","loading","save"],[3,"formGroup","keydown.enter"],["appearance","fill",1,"full-width"],["formControlName","project","required","",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["maxlength","60","matInput","","formControlName","name","required","","placeholder","Ex. WebApi not working",3,"ngModel","ngModelChange"],["align","end"],["maxlength","150","matInput","","formControlName","description","required","","placeholder","Ex. WebApi cors version is not 4.0",3,"ngModel","ngModelChange"],["maxlength","10","matInput","","formControlName","version","required","","placeholder","Ex. 1.0",3,"ngModel","ngModelChange"],["matInput","","formControlName","time","type","number","min","1","max","999","required","","placeholder","1","formControlName","time",3,"ngModel","ngModelChange"],["matSuffix",""],["formControlName","isActive",3,"ngModel","ngModelChange"],[3,"value","disabled","valueChange"],[3,"value"]],template:function(e,t){1&e&&(s.TgZ(0,"app-generic-form",0),s.NdJ("save",function(){return t.save()}),s.TgZ(1,"form",1),s.NdJ("keydown.enter",function(){return t.save()}),s.TgZ(2,"mat-form-field",2),s.TgZ(3,"mat-label"),s._uU(4,"Choose project"),s.qZA(),s.TgZ(5,"mat-select",3),s.NdJ("ngModelChange",function(e){return t.selectedProjectId=e})("selectionChange",function(){return t.loadDevs()}),s.YNc(6,b,2,2,"mat-option",4),s.qZA(),s.qZA(),s.TgZ(7,"mat-form-field",2),s.TgZ(8,"mat-label"),s._uU(9,"Enter name"),s.qZA(),s.TgZ(10,"input",5),s.NdJ("ngModelChange",function(e){return t.bug.name=e}),s.qZA(),s.TgZ(11,"mat-hint",6),s._uU(12),s.qZA(),s.qZA(),s.TgZ(13,"mat-form-field",2),s.TgZ(14,"mat-label"),s._uU(15,"Enter description"),s.qZA(),s.TgZ(16,"input",7),s.NdJ("ngModelChange",function(e){return t.bug.description=e}),s.qZA(),s.TgZ(17,"mat-hint",6),s._uU(18),s.qZA(),s.qZA(),s.TgZ(19,"mat-form-field",2),s.TgZ(20,"mat-label"),s._uU(21,"Enter version"),s.qZA(),s.TgZ(22,"input",8),s.NdJ("ngModelChange",function(e){return t.bug.version=e}),s.qZA(),s.TgZ(23,"mat-hint",6),s._uU(24),s.qZA(),s.qZA(),s.TgZ(25,"mat-form-field",2),s.TgZ(26,"mat-label"),s._uU(27,"Enter time"),s.qZA(),s.TgZ(28,"input",9),s.NdJ("ngModelChange",function(e){return t.bug.time=e}),s.qZA(),s.TgZ(29,"span",10),s._uU(30,"hr."),s.qZA(),s.qZA(),s.TgZ(31,"mat-slide-toggle",11),s.NdJ("ngModelChange",function(e){return t.bug.isActive=!e}),s._uU(32),s.qZA(),s.TgZ(33,"mat-form-field",2),s.TgZ(34,"mat-label"),s._uU(35,"Resolved by"),s.qZA(),s.TgZ(36,"mat-select",12),s.NdJ("valueChange",function(e){return t.selectedDevId=e}),s.YNc(37,v,2,2,"mat-option",4),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.Q6J("form",t.form)("infoMessage",t.infoMessage)("loading",t.loading),s.xp6(1),s.Q6J("formGroup",t.form),s.xp6(4),s.Q6J("ngModel",t.selectedProjectId),s.xp6(1),s.Q6J("ngForOf",t.projects),s.xp6(4),s.Q6J("ngModel",t.bug.name),s.xp6(2),s.hij("",t.bug.name.length," / 60"),s.xp6(4),s.Q6J("ngModel",t.bug.description),s.xp6(2),s.hij("",t.bug.description.length," / 150"),s.xp6(4),s.Q6J("ngModel",t.bug.version),s.xp6(2),s.hij("",t.bug.version.length," / 10"),s.xp6(4),s.Q6J("ngModel",t.bug.time),s.xp6(3),s.Q6J("ngModel",!t.bug.isActive),s.xp6(1),s.hij(" ",t.display(t.bug.isActive)," "),s.xp6(4),s.Q6J("value",t.selectedDevId)("disabled",t.bug.isActive),s.xp6(1),s.Q6J("ngForOf",t.devs))},directives:[c.t,o._Y,o.JL,o.sg,d.KE,d.hX,u.gD,o.JJ,o.u,o.Q7,h.sg,p.Nt,o.Fj,o.nD,d.bx,o.wV,o.qQ,o.Fd,d.R9,m.Rr,f.ey],styles:[".full-width[_ngcontent-%COMP%]{display:block;width:95%;margin:3% auto 0}mat-slide-toggle[_ngcontent-%COMP%]{margin-top:3%;margin-bottom:3%;margin-left:3%}"]}),e})()},4249:(e,t,n)=>{"use strict";n.d(t,{$:()=>u});var o=n(7716),i=n(4875),s=n(434),r=n(8069),a=n(3472),l=n(8703),g=n(805),c=n(6652),d=n(2122);let u=(()=>{class e{constructor(e,t,n,s){this.router=e,this.r=t,this.dialog=n,this.serviceBugs=s,this.sendBugs=new o.vpe,this.buttonsColumns=[{header:"Edit",property:"edit",display:i.s.id,type:r.Q.Button},{header:"Delete",property:"delete",display:i.s.id,type:r.Q.Button}],this.buttonsActions=new Map([["edit",{text:()=>"Edit",onClick:e=>{this.editBug(e)},color:()=>"primary"}],["delete",{text:()=>"Delete",onClick:e=>{this.deleteBug(e)},color:()=>"warn"}]])}editBug(e){this.router.navigate(["../bug"],{relativeTo:this.r,queryParams:{id:String(e.id)}})}deleteBug(e){this.dialog.open(s.F).afterClosed().subscribe(t=>{t&&this.serviceBugs.deleteBug(e.id).subscribe(e=>this.serviceBugs.getBugs().subscribe(e=>{this.dataSource=e,this.sendBugToNextTable(e)},e=>{}))})}sendBugToNextTable(e){this.sendBugs.emit(e)}ngOnInit(){}createBug(){this.router.navigate(["../bug"],{relativeTo:this.r})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.F0),o.Y36(a.gz),o.Y36(l.uw),o.Y36(g.H))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-bugs"]],inputs:{dataSource:"dataSource"},outputs:{sendBugs:"sendBugs"},decls:3,vars:3,consts:[["type","submit","mat-flat-button","",3,"click"],[3,"dataSource","buttonsColumns","buttonsActions","sendBugs"]],template:function(e,t){1&e&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return t.createBug()}),o._uU(1,"Create new bug\n"),o.qZA(),o.TgZ(2,"app-bugs-table",1),o.NdJ("sendBugs",function(e){return t.sendBugToNextTable(e)}),o.qZA()),2&e&&(o.xp6(2),o.Q6J("dataSource",t.dataSource)("buttonsColumns",t.buttonsColumns)("buttonsActions",t.buttonsActions))},directives:[c.lW,d.$],styles:["button[_ngcontent-%COMP%]{margin-left:3%;margin-top:1%;background-color:#4caf50;color:#fff}"]}),e})()},434:(e,t,n)=>{"use strict";n.d(t,{F:()=>r});var o=n(7716),i=n(8703),s=n(6652);let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-delete-dialog"]],decls:9,vars:2,consts:[["mat-dialog-title",""],["id","content","mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","id","delete","color","warn",3,"mat-dialog-close"],["mat-button","","id","cancel","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,t){1&e&&(o.TgZ(0,"h1",0),o._uU(1,"Are you sure you want to delete it?"),o.qZA(),o.TgZ(2,"div",1),o._uU(3,"This action cannot be reverted."),o.qZA(),o.TgZ(4,"div",2),o.TgZ(5,"button",3),o._uU(6,"Delete"),o.qZA(),o.TgZ(7,"button",4),o._uU(8,"Cancel"),o.qZA(),o.qZA()),2&e&&(o.xp6(5),o.Q6J("mat-dialog-close",!0),o.xp6(2),o.Q6J("mat-dialog-close",!1))},directives:[i.uh,i.xY,i.H8,s.lW,i.ZT],styles:["#content[_ngcontent-%COMP%]{font-family:sans-serif}"]}),e})()},9098:(e,t,n)=>{"use strict";n.d(t,{t:()=>p});var o=n(7716),i=n(3679),s=n(8583),r=n(9966),a=n(7055),l=n(6652),g=n(9444),c=n(4490);function d(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"button",8),o.NdJ("click",function(){return o.CHM(e),o.oxw().cancel()}),o._uU(1,"Cancel "),o.qZA()}if(2&e){const e=o.oxw();o.s9C("disabled",e.loading)}}function u(e,t){1&e&&o._UZ(0,"mat-spinner",9),2&e&&o.Q6J("diameter",30)}const h=["*"];let p=(()=>{class e{constructor(e){this.location=e,this.title="Form",this.form=new i.cw({}),this.infoMessage={error:!1,text:""},this.showCancelButton=!0,this.save=new o.vpe}cancel(){this.location.back()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.Ye))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-generic-form"]],inputs:{title:"title",form:"form",infoMessage:"infoMessage",showCancelButton:"showCancelButton",loading:"loading"},outputs:{save:"save"},ngContentSelectors:h,decls:17,vars:5,consts:[[1,"wrapper"],[1,"center-screen"],["id","centerDiv"],["id","centerFormContentDiv"],["id","cancel","mat-flat-button","","color","warn",3,"disabled","click",4,"ngIf"],["id","save","mat-flat-button","","color","primary",3,"disabled","click"],[3,"diameter",4,"ngIf"],[3,"message"],["id","cancel","mat-flat-button","","color","warn",3,"disabled","click"],[3,"diameter"]],template:function(e,t){1&e&&(o.F$t(),o.TgZ(0,"div",0),o.TgZ(1,"mat-card",1),o.TgZ(2,"h2"),o._uU(3),o.qZA(),o._UZ(4,"mat-divider"),o._UZ(5,"br"),o.TgZ(6,"div",2),o.TgZ(7,"div",3),o.Hsn(8),o.qZA(),o.qZA(),o._UZ(9,"mat-divider"),o._UZ(10,"br"),o.YNc(11,d,2,1,"button",4),o.TgZ(12,"button",5),o.NdJ("click",function(){return t.save.emit()}),o._uU(13,"Save "),o.qZA(),o.YNc(14,u,1,1,"mat-spinner",6),o._UZ(15,"br"),o._UZ(16,"app-message",7),o.qZA(),o.qZA()),2&e&&(o.xp6(3),o.Oqu(t.title),o.xp6(8),o.Q6J("ngIf",t.showCancelButton),o.xp6(1),o.s9C("disabled",!t.form.valid||t.loading),o.xp6(2),o.Q6J("ngIf",t.loading),o.xp6(2),o.Q6J("message",t.infoMessage))},directives:[r.a8,a.d,s.O5,l.lW,g.q,c.$g],styles:[".center-screen[_ngcontent-%COMP%]{margin-top:1%;display:inline-block;min-width:40em}.wrapper[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{text-align:center}button[_ngcontent-%COMP%]{margin:auto;display:block}#save[_ngcontent-%COMP%]{float:right;margin-right:1em;background-color:#4caf50}#save[_ngcontent-%COMP%]:disabled{background-color:#e0e0e0}#cancel[_ngcontent-%COMP%]{float:right}mat-spinner[_ngcontent-%COMP%]{display:block;float:right;margin:auto 1em auto auto}h2[_ngcontent-%COMP%], mat-spinner[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{margin-top:5%;font-weight:0}app-message[_ngcontent-%COMP%]{text-align:left}#centerFormContentDiv[_ngcontent-%COMP%]{text-align:left;width:50%}#centerDiv[_ngcontent-%COMP%], #centerFormContentDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column}#centerDiv[_ngcontent-%COMP%]{align-items:center}"]}),e})()},7135:(e,t,n)=>{"use strict";n.d(t,{k:()=>l});var o=n(5894),i=n(2340),s=n(7749),r=n(7716),a=n(1841);let l=(()=>{class e{constructor(e){this.http=e,this.endpoint=`${i.N.webApi_origin}/devs`,this.options={headers:{token:"",path:""}}}getDevelopers(){return this.options.headers.token=localStorage.getItem("token")||"",this.http.get(this.endpoint,this.options).pipe((0,o.K)(s.k.handleError))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},354:(e,t,n)=>{"use strict";n.d(t,{m:()=>l});var o=n(5894),i=n(2340),s=n(7749),r=n(7716),a=n(1841);let l=(()=>{class e{constructor(e){this.http=e,this.endpoint=`${i.N.webApi_origin}/projects`,this.options={headers:{token:"",path:""}}}getProjects(){return this.options.headers.token=localStorage.getItem("token")||"",this.http.get(this.endpoint,this.options).pipe((0,o.K)(s.k.handleError))}getProject(e){return this.options.headers.token=localStorage.getItem("token")||"",this.http.get(`${this.endpoint}/${e}`,this.options).pipe((0,o.K)(s.k.handleError))}createProject(e){return this.options.headers.token=localStorage.getItem("token")||"",this.http.post(this.endpoint,e,this.options).pipe((0,o.K)(s.k.handleError))}editProject(e,t){return this.options.headers.token=localStorage.getItem("token")||"",this.http.put(`${this.endpoint}/${t}`,e,this.options).pipe((0,o.K)(s.k.handleError))}getDevelopers(e){return this.options.headers.token=localStorage.getItem("token")||"",this.http.get(`${this.endpoint}/${e}/devs`,this.options).pipe((0,o.K)(s.k.handleError))}getTesters(e){return this.options.headers.token=localStorage.getItem("token")||"",this.http.get(`${this.endpoint}/${e}/testers`,this.options).pipe((0,o.K)(s.k.handleError))}deleteProject(e){return this.options.headers.token=localStorage.getItem("token")||"",this.http.delete(`${this.endpoint}/${e}`,this.options).pipe((0,o.K)(s.k.handleError))}addDevToProject(e,t){return this.options.headers.token=localStorage.getItem("token")||"",this.http.post(`${this.endpoint}/${e}/devs/${t}`,null,this.options).pipe((0,o.K)(s.k.handleError))}removeDevFromProject(e,t){return this.options.headers.token=localStorage.getItem("token")||"",this.http.delete(`${this.endpoint}/${e}/devs/${t}`,this.options).pipe((0,o.K)(s.k.handleError))}addTesterToProject(e,t){return this.options.headers.token=localStorage.getItem("token")||"",this.http.post(`${this.endpoint}/${e}/testers/${t}`,null,this.options).pipe((0,o.K)(s.k.handleError))}removeTesterFromProject(e,t){return this.options.headers.token=localStorage.getItem("token")||"",this.http.delete(`${this.endpoint}/${e}/testers/${t}`,this.options).pipe((0,o.K)(s.k.handleError))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(a.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);