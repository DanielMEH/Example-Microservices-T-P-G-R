# la parte de bucles de python\conceptosBasicos.py:

# lista de iterable python y tuplas completas y listas dicionarios conjuntos


# animales = ["perro","gato","raton","leon","gallina","burro","cerdo","conejo","ardilla"]
# numeros = [1,2,3,4,5,6,7,8,9,]

# for animal in animales:
#     print(f"la variable animal contiene: {animal}")
    
    



# for animales, numeros in zip(animales,numeros):
#     print(f"la variable animal contiene: {animales} y la variable numeros contiene: {numeros}") \
        
        
# for iteration in range(0,10):
#     print(f"la variable iteration contiene: {iteration}")
    
    

# for number in range(len(num)):
#     print(num[number])
    
    
# pero la forma correcta es con enumerate con su indece

num = [1,2]

for num in enumerate(num):
    
    if(num[1]==2):
        break
    print(num[0],num[1])
    
    
# todo funciona lo anterior para tuplas y listas y conjuntos y diccionarios 
# for else


## iterar diccionarios

# dicc = {"a":1,"b":2,"c":3}

# for key in dicc.items():
#     print(key)
    
    
# # recorer una cadena de texto

# texto_name = "Daniel Andres Gomez Gomez"


# for letra in texto_name:
#     print(letra)
    
    
# list_duplicados= list()


# for numeros_duplicados in num:
#     list_duplicados.append(numeros_duplicados*2)
#     print(f"la lista de numeros duplicados es: {list_duplicados}")
# else:
#     print("no hay numeros en la lista")
    
    

# list_duplicados = [numeros_duplicados*2 for numeros_duplicados in num]
# print(f"la lista de numeros duplicados es: {list_duplicados}") 


# contador = 5

# while contador <= 10:
#     print(contador)
#     contador+=2
    
    
# (min, max, bool, all, sum->iterables, ) utilidades


def hola(name):
    print(f"hola {name}")
    
hola("JUAN DANIEL OSPINA ORTIZ")


# FUNCIONES LAMBDA

nombre = lambda name: print(f"hola {name}")


num = [1,5,76,8,9,0]

num_pars = list(filter(lambda num: num%2==0,num))

print(num_pars)

nombre("JUAN DANIEL ")