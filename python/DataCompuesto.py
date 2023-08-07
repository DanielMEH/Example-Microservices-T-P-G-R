# #lISTA DE ARREGLOS ME PERMITE MODIFICARLOS 
# lista = ["name","Daniel",True,12]
# # TUPLAS NO PUEDO MODIFICAR SUS VALORES

# tuple = ("name","Daniel",True,12)


# print("Lista de datos"+str(lista[1]))


# # Conjuto de datos 

# conjunto = {
#     "example1",
#     "example2",
#     "new data"
# }

# conjunto.add("new data dfgfgfg")
# print(str(conjunto[1]))


# textoProperties = list([1,150,3,5,6,250,8,100,0])

# name = "hola"
# propeties = dir(textoProperties)
# print(propeties)

# print(type(textoProperties))

# listn = len(textoProperties)

# textoProperties.remove(0)
# textoProperties.sort()
# print(textoProperties[7])

# diccionario = {
#     "name":"Daniel",
#     "edad":12
# }

# print(diccionario.items())


entrada_de_palabras="";
entrada_de_palabras = input("ingrese una palabra para calcular cuanto de tardarias en decirlas: ")
separar_parabras = entrada_de_palabras.split(" ")
cantidad_de_palabras = len(separar_parabras)
print(cantidad_de_palabras)

while cantidad_de_palabras < 8:
    entrada_de_palabras = input(f"Ingresaste: {cantidad_de_palabras} palabra ingresa mas de 8 palabras para hacer el calculo ")

print(f"la cantidad de palabras que ingresaste son: {cantidad_de_palabras}: y se demoro: {cantidad_de_palabras/2}")