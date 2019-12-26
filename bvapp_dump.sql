--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game (
    id integer NOT NULL,
    myuser_id integer NOT NULL,
    sportcenterid integer NOT NULL,
    priceperperson numeric(18,2) NOT NULL,
    isprivate boolean NOT NULL,
    gamedate date NOT NULL,
    gametime time without time zone NOT NULL,
    gameisfull boolean NOT NULL,
    gameispast boolean NOT NULL,
    description character varying(1000),
    version integer NOT NULL
);


ALTER TABLE public.game OWNER TO postgres;

--
-- Name: game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_id_seq OWNER TO postgres;

--
-- Name: game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;


--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- Name: my_seq_gen; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.my_seq_gen
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.my_seq_gen OWNER TO postgres;

--
-- Name: my_user_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.my_user_detail (
    id integer,
    firstname character varying(100),
    lastname character varying(100),
    phone character varying(50),
    gpsx numeric(12,8),
    gpsy numeric(12,8),
    playedcount integer,
    noshowcount integer,
    myuser_id integer,
    version integer
);


ALTER TABLE public.my_user_detail OWNER TO postgres;

--
-- Name: myuser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.myuser (
    id integer NOT NULL,
    name character varying(100),
    password character varying(100),
    roles character varying(50),
    email character varying(100)
);


ALTER TABLE public.myuser OWNER TO postgres;

--
-- Name: myuser_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.myuser_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.myuser_id_seq OWNER TO postgres;

--
-- Name: myuser_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.myuser_id_seq OWNED BY public.myuser.id;


--
-- Name: game id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);


--
-- Name: myuser id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.myuser ALTER COLUMN id SET DEFAULT nextval('public.myuser_id_seq'::regclass);


--
-- Data for Name: game; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.game (id, myuser_id, sportcenterid, priceperperson, isprivate, gamedate, gametime, gameisfull, gameispast, description, version) FROM stdin;
1	1	1	100.00	f	2019-12-25	15:00:00	f	f	description test	0
493	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
507	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
508	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
510	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
511	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
512	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
513	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
515	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
516	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
517	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
518	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
519	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
520	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
521	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
522	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
523	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
524	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
529	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
530	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
612	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
613	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
614	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
615	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
626	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
627	1	1	10.00	t	2019-10-05	15:00:00	t	t	this is a game that I just created	0
\.


--
-- Data for Name: my_user_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.my_user_detail (id, firstname, lastname, phone, gpsx, gpsy, playedcount, noshowcount, myuser_id, version) FROM stdin;
1	Stefano	Di Caro	+420722412479	50.08705770	14.41766190	0	0	1	0
2	Enrico	Barone	+390112652788	45.06775500	7.68248900	0	0	2	0
623	Michaela	Di Caro		0.00000000	0.00000000	0	0	622	0
625	Piero	Sraffa		0.00000000	0.00000000	0	0	624	0
\.


--
-- Data for Name: myuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.myuser (id, name, password, roles, email) FROM stdin;
1	dicaros	$2a$10$0WfvL7hMaAb/NR9Nmst7bOkduPQzcYuc2HXocw/sHHXvc9VNVBfe.	ROLE_USER	dicaros@polimi.it
622	misinka	$2a$10$dAhb6fL9dwW1wm0iut7SKefwHxuSHSfZ7MuKbhsApxxRnp9.zRWQu	ROLE_USER	misinka@misinka.cz
2	barone	$2a$10$2EjQTA3jYgD9Qk3kqku3Uug4npUlCqeW.xbZY8hUP7GPkCgbRNLvm	ROLE_USER	dicaro@dicaro.it
624	sraffa	$2a$10$.pTbp2p5vTWqw5AKOsT8QODqltDul3ulZSEls6MZtAHMwKbrQJ2tm	ROLE_USER	psraffa@unibocconi.it
\.


--
-- Name: game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.game_id_seq', 1, true);


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 627, true);


--
-- Name: my_seq_gen; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_seq_gen', 1, false);


--
-- Name: myuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.myuser_id_seq', 2, true);


--
-- Name: game game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game
    ADD CONSTRAINT game_pkey PRIMARY KEY (id);


--
-- Name: myuser myuser_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.myuser
    ADD CONSTRAINT myuser_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

