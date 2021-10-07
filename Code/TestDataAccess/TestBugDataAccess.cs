﻿using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using Domain;
using Domain.Utils;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Repository;

namespace TestDataAccess
{
    [TestClass]
    public class TestBugDataAccess
    {

        private readonly DbConnection connection;
        private readonly BugDataAccess bugDataAccess;
        private readonly BugManagerContext bugManagerContext;
        private readonly DbContextOptions<BugManagerContext> contextOptions;

        public TestBugDataAccess()
        {
            connection = new SqliteConnection("Filename=:memory:");
            contextOptions = new DbContextOptionsBuilder<BugManagerContext>().UseSqlite(connection).Options;
            bugManagerContext = new BugManagerContext(contextOptions);
            bugDataAccess = new BugDataAccess(bugManagerContext);
        }

        [TestInitialize]
        public void Setup()
        {
            connection.Open();
            bugManagerContext.Database.EnsureCreated();

            Project project = new Project()
            {
                Id = 1,
                Name = "project1"
            };
            bugManagerContext.Projects.Add(project);
            bugManagerContext.SaveChanges();

        }

        [TestCleanup]
        public void CleanUp()
        {
            bugManagerContext.Database.EnsureDeleted();
        }

        [TestMethod]
        public void GetAll()
        {
            var bugsExpected = new List<Bug>
            {
                new Bug
                {
                    Id = 1,
                    Name = "a",
                    Description = "a",
                    ProjectId = 1,
                    Version = "1.0",
                    IsActive = true
        }
    };
            bugManagerContext.Add(new Bug
            {
                Id = 1,
                Name = "a",
                Description = "a",
                ProjectId = 1,
                Version = "1.0",
                IsActive = true
            });
            bugManagerContext.SaveChanges();
            List<Bug> bugDataBase = bugDataAccess.GetAll().ToList();

            Assert.AreEqual(1, bugDataBase.Count);
            CollectionAssert.AreEqual(bugsExpected, bugDataBase, new BugComparer());
        }

        [TestMethod]
        public void Update()
        {
            Developer dev = new Developer()
            {
                Id = 4,
                Name = "Juan"
            };
            bugManagerContext.Add(dev);
            bugManagerContext.SaveChanges();

            Project project = new Project()
            {
                Name = "project",
                Id = 4,
            };
            bugManagerContext.Add(project);
            bugManagerContext.SaveChanges();

            Bug bug = bugDataAccess.Create(new Bug
            {
                Id = 2,
                Name = "b",
                Description = "a",
                Version = "1.0",
                ProjectId = 4,
                IsActive = false
            });

            var bugUpdated = new Bug
            {
                Id = 2,
                Name = "a",
                Description = "a",
                ProjectId = 4,
                Version = "1.0",
                IsActive = true
            };

            Bug bugModified = bugDataAccess.Update(bug.Id, bugUpdated);
            bugManagerContext.SaveChanges();


            Assert.AreEqual(0, new BugComparer().Compare(bugUpdated, bugModified));

        }

        [TestMethod]
        public void Create()
        {
            bugManagerContext.Add(new Project()
            {
                Name = "project",
                Id = 2
            });
            bugManagerContext.SaveChanges();
            Bug expectedBug = new Bug()
            {
                Id = 1,
                Name = "Error",
                Description = "Erorr critico",
                ProjectId = 2,
                Version = "2.0",
                IsActive = true,
            };

            bugDataAccess.Create(new Bug()
            {
                Id = 1,
                Name = "Error",
                Description = "Erorr critico",
                Version = "2.0",
                ProjectId = 2,
                IsActive = true,

            });

            var bugSaved = bugDataAccess.GetById(1);
            Assert.AreEqual(0, new BugComparer().Compare(expectedBug, bugSaved));

        }

        [TestMethod]
        public void CreateNull()
        {


            bugDataAccess.Create(null);
            Assert.AreEqual(0, new BugComparer().Compare(expectedBug, bugSaved));

        }



        [TestMethod]
        public void AddsIdFromProjectName()
        {
            Project project1 = new Project()
            {
                Name = "Project5",
                Id = 5
            };

            bugManagerContext.Add(project1);
            bugManagerContext.SaveChanges();

            bugDataAccess.Create(new Bug()
            {
                Id = 1,
                Name = "Error",
                Description = "Erorr critico",
                Version = "2.0",
                IsActive = true,
                ProjectName = "Project5"
            });
            var bugSaved1 = bugDataAccess.GetById(1);
            Assert.AreEqual(bugSaved1.ProjectId, 5);
        }


        [TestMethod]
        public void AddsIdFromProjectNameMultipleProjects()
        {
            Project project1 = new Project()
            {
                Name = "Project 1",
                Id = 2
            };

            Project project2 = new Project()
            {
                Name = "Project 2",
                Id = 3
            };

            bugManagerContext.Add(project1);
            bugManagerContext.SaveChanges();
            bugManagerContext.Add(project2);
            bugManagerContext.SaveChanges();

            bugDataAccess.Create(new Bug()
            {
                Id = 1,
                Name = "Error",
                Description = "Erorr critico",
                Version = "2.0",
                IsActive = true,
                ProjectName = "Project 1"
            });

            bugDataAccess.Create(new Bug()
            {
                Id = 2,
                Name = "Error",
                Description = "Erorr critico",
                Version = "2.0",
                IsActive = true,
                ProjectName = "Project 2"
            });

            var bugSaved1 = bugDataAccess.GetById(1);
            var bugSaved2 = bugDataAccess.GetById(2);
            Assert.AreEqual(bugSaved1.ProjectId, 2);
            Assert.AreEqual(bugSaved2.ProjectId, 3);
        }


        [TestMethod]
        public void Delete()
        {
            Bug notExpectedBug = new Bug()
            {
                Id = 1,
                Name = "Error",
                Description = "Erorr critico",
                ProjectId = 1,
                Version = "2.0",
                IsActive = true
            };
            bugDataAccess.Create(notExpectedBug);
            bugDataAccess.Delete(notExpectedBug.Id);
            var bugsSaved = bugDataAccess.GetAll().ToList();

            CollectionAssert.DoesNotContain(bugsSaved, notExpectedBug);

        }
    }
}
