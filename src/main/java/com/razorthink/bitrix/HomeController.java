/**
 * 
 */
package com.razorthink.bitrix;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String home() {
		return "index";
	}

	@RequestMapping(value = "/header")
	public String header() {
		return "header";
	}

	@RequestMapping(value = "/userHome")
	public String admin() {
		return "home";
	}
	@RequestMapping(value = "/jira")
	public String jira() {
		return "jira";
	}

	@RequestMapping(value = "/test")
	public String test() {
		return "test";
	}

}
