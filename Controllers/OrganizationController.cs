using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Org.Controllers
{
    public class OrganizationController : Controller
    {
        public IActionResult Index(string level, string id)
        {
            ViewData["level"] = level;
            ViewData["id"] = id;
            return View();
        }

        public IActionResult Employee()
        {
            return View();
        }
    }
}