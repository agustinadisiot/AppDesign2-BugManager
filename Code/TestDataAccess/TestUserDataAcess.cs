﻿using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using Domain;
using Domain.Utils;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Repository;
using RepositoryInterfaces;

namespace TestDataAccess
{
    [TestClass]
    public abstract class TestUserDataAccess<T> where T : User
    {
        protected IUserDataAccess<T> userDataAccess { get; set; }
        protected readonly DbConnection connection;
        protected readonly LoginDataAccess loginDataAccess;
        protected readonly BugManagerContext bugManagerContext;
        protected readonly DbContextOptions<BugManagerContext> contextOptions;
        protected T user;

        public TestUserDataAccess()
        {
            connection = new SqliteConnection("Filename=:memory:");
            contextOptions = new DbContextOptionsBuilder<BugManagerContext>().UseSqlite(connection).Options;
            bugManagerContext = new BugManagerContext(contextOptions);
            loginDataAccess = new LoginDataAccess(bugManagerContext);
        }

        [TestInitialize]
        public void Setup()
        {
            connection.Open();
            bugManagerContext.Database.EnsureCreated();
        }

        [TestCleanup]
        public void CleanUp()
        {
            bugManagerContext.Database.EnsureDeleted();
        }

        [TestMethod]
        public void VerifyValidCredentials()
        {
            user.Username = "userPedro";
            user.Name = "Pedro";
            user.Lastname = "López";
            user.Password = "fransico234";
            user.Email = "pedrooo2@hotmail.com";

            bugManagerContext.Add(user);
            bugManagerContext.SaveChanges();

            bool valid = loginDataAccess.VerifyUser("administradorPedro", "fransico234");

            Assert.IsTrue(valid);
        }
    }
}
