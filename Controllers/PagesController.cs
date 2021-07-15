using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_BlogSpot.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Blog()
        {
            return View();
        }

        public IActionResult WhatsTrending()
        {
            return View();
        }

        public IActionResult Experiences()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult AddBlog()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult AddNewBlog()
        {
            return View();
        }

        public IActionResult UserRegistration()
        {
            return View();
        }

        public IActionResult CreateBlog()
        {
            return View();
        }
    }
}
