﻿using BusinessLogic;
using BusinessLogicInterfaces;
using Domain;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using RepositoryInterfaces;
using System.Collections.Generic;
using System.Linq;

namespace TestProjectBusinessLogic
{
    [TestClass]
    public class TestProjectBusinessLogic
    {
        private List<Project> projects;
        private Project project;

        private List<Tester> testers;
        private List<Developer> developers;
        private List<Bug> bugs;


        [TestCleanup]
        public void TearDown()
        {

        }

        [TestInitialize]
        public void Setup()
        {
            project = new Project()
            {
                Id = 0,
                Name = "Web API"
            };

            projects = new List<Project>()
            {
                project
            };

            bugs = new List<Bug>();
            testers = new List<Tester>();
            developers = new List<Developer>();

        }


        [TestMethod]
        public void CreateProject()
        {
            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.Create(project)).Returns(project);
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var projectResult = projectBusinessLogic.Add(project);
            mock.VerifyAll();

            Assert.AreEqual(projectResult, project);
        }

        [TestMethod]
        public void DeleteProjectByNameNotFound()
        {
            string nameProjectToDelete = "Empty project";

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.DeleteByName(nameProjectToDelete)).Throws(new NonexistentProjectException());
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            Assert.ThrowsException<NonexistentProjectException>(() => projectBusinessLogic.DeleteByName(nameProjectToDelete));
        }

        [TestMethod]
        public void DeleteProjectByName()
        {
            string nameProjectToDelete = "project1";

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.DeleteByName(nameProjectToDelete)).Returns(new ResponseMessage("Deleted successfully"));
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var result = projectBusinessLogic.DeleteByName(nameProjectToDelete);
            mock.VerifyAll();
            Assert.IsTrue(result is ResponseMessage);
        }

        [TestMethod]
        public void DeleteProjectByIdNotFound()
        {
            int idProjectToDelete = 1;

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.Delete(idProjectToDelete)).Throws(new NonexistentProjectException());
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            Assert.ThrowsException<NonexistentProjectException>(() => projectBusinessLogic.Delete(idProjectToDelete));
        }

        [TestMethod]
        public void DeleteProjectById()
        {
            int idProjectToDelete = 0;
            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.Delete(idProjectToDelete)).Returns(new ResponseMessage("Deleted successfully"));
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var result = projectBusinessLogic.Delete(idProjectToDelete);
            mock.VerifyAll();
            Assert.IsTrue(result is ResponseMessage);
        }

        [TestMethod]
        public void GetByNameNotFound()
        {
            Project projectExpected = new Project()
            {
                Name = "Project",
                Id = 0
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.GetByName(projectExpected.Name)).Throws(new NonexistentProjectException());
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            Assert.ThrowsException<NonexistentProjectException>(() => projectBusinessLogic.GetByName(projectExpected.Name));
        }

        [TestMethod]
        public void GetByName()
        {
            Project projectExpected = new Project()
            {
                Name = "Project",
                Id = 0
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.GetByName(projectExpected.Name)).Returns(projectExpected);
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var result = projectBusinessLogic.GetByName(projectExpected.Name);

            Assert.AreEqual(projectExpected, result);
        }


        [TestMethod]
        public void GetByIdNotFound()
        {
            Project projectExpected = new Project()
            {
                Name = "Project",
                Id = 0
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.GetById(projectExpected.Id)).Throws(new NonexistentProjectException());
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            Assert.ThrowsException<NonexistentProjectException>(() => projectBusinessLogic.GetById(projectExpected.Id));
        }

        [TestMethod]
        public void GetById()
        {
            Project projectExpected = new Project()
            {
                Name = "Project",
                Id = 0
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.GetById(projectExpected.Id)).Returns(projectExpected);
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var result = projectBusinessLogic.GetById(projectExpected.Id);

            Assert.AreEqual(projectExpected, result);
        }

        [TestMethod]
        public void GetAllProjects()
        {
            List<Project> projectsExpected = new List<Project>()
            {
                new Project()
                {
                     Name = "projecOne",
                     Id = 0
                },
                new Project()
                {
                    Name = "projectDos",
                    Id = 1
                },
                 new Project()
                {
                    Name = "ProjectTrois",
                    Id = 2
                },
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.GetAll()).Returns(projectsExpected);
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var result = projectBusinessLogic.GetAll();

            Assert.IsTrue(projectsExpected.SequenceEqual(result));
        }

        [TestMethod]
        public void UpdateProjectByNameNotFound()
        {
            string nameProjectToUpdate = "Nonexistent Project";

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.UpdateByName(nameProjectToUpdate, project)).Throws(new NonexistentProjectException());
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            Assert.ThrowsException<NonexistentProjectException>(() => projectBusinessLogic.UpdateByName(nameProjectToUpdate, project));
        }

        [TestMethod]
        public void UpdateProjectByName()
        {
            string nameProjectToUpdate = "Web API";
            Project projectModified = new Project()
            {
                Id = 0,
                Name = "projectMod"
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.UpdateByName(nameProjectToUpdate, projectModified)).Returns(projectModified);
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var projectResult = projectBusinessLogic.UpdateByName(nameProjectToUpdate, projectModified);

            mock.VerifyAll();

            Assert.AreEqual(projectResult, projectModified);
        }

        [TestMethod]
        public void UpdateProjectByIdNotFound()
        {
            int idprojectToUpdate = 1;

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.Update(idprojectToUpdate, project)).Throws(new NonexistentProjectException());
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            Assert.ThrowsException<NonexistentProjectException>(() => projectBusinessLogic.Update(idprojectToUpdate, project));
        }

        [TestMethod]
        public void UpdateProjectById()
        {
            int idprojectToUpdate = 0;

            Project projectModified = new Project()
            {
                Id = 0,
                Name = "projectMod"
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.Update(idprojectToUpdate, projectModified)).Returns(projectModified);
            var projectBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var projectResult = projectBusinessLogic.Update(idprojectToUpdate, projectModified);

            mock.VerifyAll();

            Assert.AreEqual(projectResult, projectModified);
        }

        [TestMethod]
        public void GetBugs()
        {
            List<Bug> bugsExpected = new List<Bug>()
            {
                new Bug()
                {
                     Name = "Not working button",
                     Description = "Upload button not working",
                     Version = "1",
                     IsActive = true,
                     CompletedBy = null,
                     Id = 0
                },
                new Bug()
                {
                    Name = "button",
                    Description = "Upload not working",
                    Version = "1.4.5",
                    IsActive = false,
                    CompletedBy = null,
                    Id = 1
                },
                 new Bug()
                {
                    Name = "Not working button",
                    Description = "Upload button not working",
                    Version = "6.2",
                    IsActive = true,
                    CompletedBy = null,
                    Id = 2
                },
            };

            var mock = new Mock<IProjectDataAccess>(MockBehavior.Strict);
            mock.Setup(b => b.GetBugs()).Returns(bugsExpected);
            var bugBusinessLogic = new ProjectBusinessLogic(mock.Object);

            var result = bugBusinessLogic.GetAll();

            Assert.IsTrue(bugsExpected.SequenceEqual(result));
        }
    }
}
