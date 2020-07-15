using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace ProgrammingTips.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JavaScriptController : ControllerBase
    {
        private static readonly string[] JsCodeSnippets = new[]
        {
            "function multiply(num1,num2) {\\let result = num1 * num2;\\return result;\\multiply(4, 7);"
            , "let myImage = document.querySelector('img');myImage.onclick = function() { let mySrc = myImage.getAttribute('src');if(mySrc === 'images/firefox-icon.png') { myImage.setAttribute('src','images/firefox2.png');} else {  myImage.setAttribute('src','images/firefox-icon.png'); }}"
        };

        [HttpGet]
        public IEnumerable<JavaScript> Get()

        {
            var grp = new Random();
            return Enumerable.Range(1, 5).Select(index => new JavaScript
            {
                JsCodeSnippet = JsCodeSnippets[grp.Next(JsCodeSnippets.Length)]
            })
                .ToArray();
        }

    };    
}

    //        // GET api/<JavaScriptController>/5
    //        [HttpGet("{id}")]
    //        public string Get(int id)
    //        {
    //            return "value";
    //        }

    //        // POST api/<JavaScriptController>
    //        [HttpPost]
    //        public void Post([FromBody] string value)
    //        {
    //        }

    //        // PUT api/<JavaScriptController>/5
    //        [HttpPut("{id}")]
    //        public void Put(int id, [FromBody] string value)
    //        {
    //        }

    //        // DELETE api/<JavaScriptController>/5
    //        [HttpDelete("{id}")]
    //        public void Delete(int id)
    //        {
    //        }
//}
//}
