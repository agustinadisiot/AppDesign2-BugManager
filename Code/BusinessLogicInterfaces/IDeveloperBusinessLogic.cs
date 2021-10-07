﻿using Domain;

namespace BusinessLogicInterfaces
{
    public interface IDeveloperBusinessLogic : IUserBusinessLogic<Developer>
    {
        int GetQuantityBugsResolved(int idDev);
    }
}

