﻿using BusinessLogicInterfaces;
using Domain;
using System;
using System.Collections.Generic;

namespace RepositoryInterfaces
{
    public interface IUserDataAccess<T> where T : User
    {
        public T Create(T newUser);
    }
}
