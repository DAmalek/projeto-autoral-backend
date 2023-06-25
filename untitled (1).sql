CREATE TABLE public.users_customers (
	id serial NOT NULL,
	email varchar NOT NULL UNIQUE,
	cpf integer NOT NULL,
	password TEXT NOT NULL,
	CONSTRAINT users_customers_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.user_sessions (
	id serial NOT NULL,
	token TEXT NOT NULL,
	customer_id integer NOT NULL,
	CONSTRAINT user_sessions_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.medics_users (
	id serial NOT NULL,
	email varchar NOT NULL UNIQUE,
	crm integer NOT NULL,
	password TEXT NOT NULL,
	CONSTRAINT medics_users_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.medic_sessions (
	id serial NOT NULL,
	token TEXT NOT NULL,
	medic_id integer NOT NULL,
	CONSTRAINT medic_sessions_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);




ALTER TABLE user_sessions ADD CONSTRAINT user_sessions_fk0 FOREIGN KEY (customer_id) REFERENCES users_customers(id);


ALTER TABLE medic_sessions ADD CONSTRAINT medic_sessions_fk0 FOREIGN KEY (medic_id) REFERENCES medics_users(id);





