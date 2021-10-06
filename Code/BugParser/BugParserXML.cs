﻿using Domain;
using System;
using System.Collections.Generic;
using System.IO;
using System.Xml;
using System.Xml.Serialization;

namespace BugParser
{
    public class BugParserXML // TODO implementar interfaz
    {
        public static List<Bug> GetBugs(string fullPath)
        {
            // TODO hacer refactor distinas funciones
            XmlSerializer serializer = new XmlSerializer(typeof(BugModel));
            // TODO hacer test cuando falla el FileStream
            FileStream fs = new FileStream(fullPath, FileMode.Open);
            BugModel completeImportedData;
            try
            {
                completeImportedData = (BugModel)serializer.Deserialize(fs);
            }
            catch (InvalidOperationException e)
            {
                throw new XmlException(e.Message);
            }
            List<Bug> importedBugs;
            try
            {
                importedBugs = completeImportedData.ConvertToBugs();
            }
            catch (NullReferenceException e)
            {
                throw new XmlException(e.Message);
            }
            return importedBugs;

        }

    }
}
