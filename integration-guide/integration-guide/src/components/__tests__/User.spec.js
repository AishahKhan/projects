import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import User from "../User.vue";


describe("The user component",()=> {
    it("renders correctly",()=>{
        const wrapper = mount(User);
        expect(wrapper.find("input").exists()).toBe(true)
        expect(wrapper.find("button").exists()).toBe(true)
    })

    it("capitlizes the user input",async()=>{
        const wrapper = mount(User);
        const input = wrapper.find("input")
        await input.setValue('test input')
        await wrapper.find('#capitalizeButton').trigger('click')
        expect(wrapper.find('input').element.value).toBe('TEST INPUT')
    
    })

    it("puts user input in lower case",async()=>{
        const wrapper = mount(User);
        const input = wrapper.find("input")
        await input.setValue('test inPuT')
        await wrapper.find('#lowercaseButton').trigger('click')
        expect(wrapper.find('input').element.value).toBe('test input')

    })

    // it("adds user input to a list", async()=>{
        // const wrapper = mount(User);
        // const input = wrapper.find("input")
        // await input.setValue('test inPuT')
        // await wrapper.find('#lowercaseButton').trigger('click')
        // const list = wrapper.find("ul")
        // expect(list.text()).toBe('test input')
        


    // })

    it("input in table", async()=>{
        const wrapper = mount(User);
        const input = wrapper.find("input")
        await input.setValue('test input')
        const table = wrapper.find("table")
        expect(table.text()).toBe('edit me')
        
        

    })

    it("result in table", async()=>{
        const wrapper = mount(User);
        const result = wrapper.find("result")
        const table = wrapper.find("table")
        expect(table.text()).toBe('EDIT ME')
        
        

    })


})