package org.developerworks.store.web;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DaoHelper {
	private static DaoHelper instance = new DaoHelper();
	private final EntityManager mgr;
	private DaoHelper(){
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("store");
		mgr = factory.createEntityManager();
	}
	
	public EntityManager getEntityManager(){
		return mgr;
	}
	
	public static DaoHelper getInstance(){
		return instance;
	}
}
