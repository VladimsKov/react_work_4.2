function sortByDate(elems) {    
    elems.sort((a, b) => dateStamp(b.dateValue) - dateStamp(a.dateValue));
    return elems
}

function dateStamp(dateString) {
    return Date.parse(
        formDate(dateString)
        );
    }
    
    function formDate(dateString) {
        return '20' + dateString.slice(6) + '-' + dateString.slice(3,5) + '-' + dateString.slice(0,2)
    }
    
    function listFilter(list, currentTarget) {
        return list.filter(el => { 
            const formEl = el.dateValue.slice(0,6) + "20" + el.dateValue.slice(6);
            return formEl !== currentTarget.firstElementChild.textContent
        });
    }   
    
    const handleDataFunc = function(list, setForm, setList) {
        return (
            ({target, currentTarget}) => {
                if (target.classList.contains('del-btn')) {
                    setForm(prev => ({ ...prev, dateValue: "", distance: ""}));                                         
                }
                if (target.classList.contains('cng-btn')) {
                    console.log(currentTarget.firstElementChild.nextElementSibling.textContent);
                    const chosenDate = currentTarget.firstElementChild.textContent.slice(0,6) + 
                    currentTarget.firstElementChild.textContent.slice(8);                                        
                    setForm(prev => ({
                        ...prev,
                        dateValue: chosenDate,
                        distance: currentTarget.firstElementChild.nextElementSibling.textContent
                    }));                                    
                }
                setList(()=> listFilter(list, currentTarget)); 
            })
        }
        
        export {handleDataFunc, sortByDate};
        