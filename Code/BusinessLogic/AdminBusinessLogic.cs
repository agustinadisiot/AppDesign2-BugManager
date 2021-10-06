﻿using BusinessLogicInterfaces;
using Domain;
using RepositoryInterfaces;

namespace BusinessLogic
{
    public class AdminBusinessLogic : IAdminBusinessLogic
    {
        public IAdminDataAccess adminDataAccess { get; set; }

        public AdminBusinessLogic(IAdminDataAccess newAdminDataAccess)
        {
            adminDataAccess = newAdminDataAccess;
        }

        public Admin Add(Admin admin)
        {
            adminDataAccess.Create(admin);
            return admin;
        }

    }


}