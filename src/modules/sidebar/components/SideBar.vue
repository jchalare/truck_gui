<template>
    <aside :class="`${estaAbierto && 'estaAbierto'}`">
        <div class="logo">
            <img alt="Vue logo" src="@/assets/img/tm-logo-n-nobg.png">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <i class="fa-solid fa-house"></i>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/about" class="button">
                <span class="material-icons">description</span>
                <span class="text">About</span>
            </router-link>
            <router-link to="/compania" class="button">
                <!--span class="material-icons">group</!--span-->
                <i class="fa-solid fa-building"></i>
                <span class="text">Compañia</span>
            </router-link>
            <router-link to="/contact" class="button">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>

import {ref} from 'vue'

const estaAbierto = ref(localStorage.getItem("estaAbierto") === "true");

/*const toggleMenu = () =>{
    estaAbierto.value = !estaAbierto.value
}*/

const toggleMenu = () => {
    estaAbierto.value = !estaAbierto.value
    localStorage.setItem("estaAbierto", estaAbierto.value)
}

</script>


<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 38px);
	overflow: hidden;
    min-height: 100vh;
        padding: 1rem;
        transition: 0.2s ease-in-out;
    
        .flex {
            flex: 1 1 0%;
        }
    
        .logo {
            margin-bottom: 1rem;
    
            img {
                width: 2rem;
            }
        }
    
        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
            position: relative;
            top: 0;
            transition: 0.2s ease-in-out;
    
            .menu-toggle {
                transition: 0.2s ease-in-out;

                .material-icons,
                .fa-solid {
                    font-size: 1rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }
    
                &:hover {
                    .material-icons,
                    .fa-solid {
                        color: var(--primary);
                        transform: translateX(0.5rem);
                    }
                }
            }
        }
    
        h3,
        .button .text {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
    
        h3 {
            color: var(--grey);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }
    
        .menu {
            margin: 0 -1rem;
    
            .button {
                display: flex;
                align-items: center;
                text-decoration: none;
                transition: 0.2s ease-in-out;
                padding: 0.5rem 1rem;

                .material-icons,
                .fa-solid {
                    font-size: 1.3rem;
                    color: var(--light);
                    transition: 0.2s ease-in-out;
                }
    
                .text {
                    color: var(--light);
                    transition: 0.2s ease-in-out;
                }
    
                &:hover {
                    background-color: var(--dark-alt);
    
                    .material-icons,
                    .fa-solid,
                    .text {
                        color: var(--primary);
                    }
                }
    
                &.router-link-exact-active {
                    background-color: var(--dark-alt);
                    border-right: 5px solid var(--primary);

                    .fa-solid,
                    .material-icons,
                    .text {
                        color: var(--primary);
                    }
                }
            }
        }
    
        .footer {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
    
            p {
                font-size: 0.875rem;
                color: var(--grey);
            }
        }
    
        &.estaAbierto {
            width: var(--sidebar-width);
    
            .menu-toggle-wrap {
                top: -3rem;
    
                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }
    
            h3,
            .button .text {
                opacity: 1;
            }
    
            .button {
                .fa-solid,
                .material-icons {
                    margin-right: 1rem;
                }
            }
    
            .footer {
                opacity: 0;
            }
        }
    
        @media (max-width: 1024px) {
            position: absolute;
            z-index: 99;
        }
    }
</style>