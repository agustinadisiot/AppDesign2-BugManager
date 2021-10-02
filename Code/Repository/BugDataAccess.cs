﻿using Domain;
using Microsoft.EntityFrameworkCore;
using Repository.Design;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Repository
{
    public class BugDataAccess
    {
        private readonly DbSet<Bug> bugs;
        private readonly BugManagerContext context;

        public BugDataAccess(BugManagerContext newContext)
        {
            context = newContext;
            bugs = context.Set<Bug>();
        }

        public Bug Create(Bug bug)
        {

            if (bug is null)
            {
                throw new ArgumentNullException("Bug can't be null");// TODO cambiar excepcion
            }

            context.Add(bug);
            context.SaveChanges();

            return bug;


        }
        public Bug GetById(int id)
        {
            Bug bug = bugs.First(bug => bug.Id == id);
            return bug;
        }

        public IEnumerable<Bug> GetAll()
        {
            return context.Bugs;
        }

        public void Update(Bug bugUpdated)
        {
            if (bugs is null)
                throw new ArgumentNullException("Bugs can't be null"); // TODO cambiar excepcion
            //bugs.Update(bugUpdated); // TODO ver porque no anda  esto, seguramente tenga que 
            // ver con el context
            // esto es lo que haciamos en DA1: 
            Bug bugToUpdate = GetById(bugUpdated.Id);
            bugToUpdate.Name = bugUpdated.Name;
            bugToUpdate.Version = bugUpdated.Version;
            bugToUpdate.IsActive = bugUpdated.IsActive;
            bugToUpdate.ProjectId = bugUpdated.ProjectId;
            bugToUpdate.Projects = bugUpdated.Projects;
            bugToUpdate.Description = bugUpdated.Description;
            context.SaveChanges();
        }
    }
}
