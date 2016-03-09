package com.razorthink.bitrix.rest;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( "/bitrix" )
@Component
public class BitrixRestService {
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String testBitrix()
	{
		return "test";
	}
}
